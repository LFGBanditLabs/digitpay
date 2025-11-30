/**
 * API Client Utility
 * Handles HTTP requests with authentication and error handling
 */

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

interface RequestOptions {
  method?: RequestMethod
  headers?: Record<string, string>
  body?: any
  requireAuth?: boolean
}

interface ApiError {
  message: string
  status: number
  statusText: string
  data?: any
}

class ApiClient {
  private baseURL: string
  private defaultHeaders: Record<string, string>

  constructor(baseURL?: string) {
    this.baseURL = baseURL || process.env.NEXT_PUBLIC_API_BASE_URL || ''
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  /**
   * Get authentication token from storage or environment
   */
  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      // Try to get from localStorage
      return localStorage.getItem('auth_token') || 
             localStorage.getItem('api_token') ||
             null
    }
    // Server-side: get from environment variable
    return process.env.API_TOKEN || null
  }

  /**
   * Get API key from environment or storage
   */
  private getApiKey(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('api_key') || null
    }
    return process.env.NEXT_PUBLIC_API_KEY || null
  }

  /**
   * Build headers for the request
   */
  private buildHeaders(options: RequestOptions): HeadersInit {
    const headers: Record<string, string> = {
      ...this.defaultHeaders,
      ...options.headers,
    }

    // Add authentication if required
    if (options.requireAuth !== false) {
      const token = this.getAuthToken()
      const apiKey = this.getApiKey()

      if (token) {
        headers['Authorization'] = `Bearer ${token}`
      } else if (apiKey) {
        headers['X-API-Key'] = apiKey
        // Some APIs use different header names
        headers['Authorization'] = `ApiKey ${apiKey}`
      }
    }

    return headers
  }

  /**
   * Handle API errors
   */
  private async handleError(response: Response): Promise<ApiError> {
    let errorData: any = null
    
    try {
      errorData = await response.json()
    } catch {
      errorData = await response.text()
    }

    const error: ApiError = {
      message: errorData?.message || errorData || response.statusText || 'An error occurred',
      status: response.status,
      statusText: response.statusText,
      data: errorData,
    }

    // Handle specific error codes
    switch (response.status) {
      case 401:
        error.message = 'Authentication required. Please check your credentials.'
        // Optionally clear invalid token
        if (typeof window !== 'undefined') {
          localStorage.removeItem('auth_token')
        }
        break
      case 403:
        error.message = 'Access forbidden. You may not have permission to access this resource.'
        break
      case 404:
        error.message = 'Resource not found.'
        break
      case 429:
        error.message = 'Too many requests. Please try again later.'
        break
      case 500:
        error.message = 'Server error. Please try again later.'
        break
    }

    return error
  }

  /**
   * Make an API request
   */
  async request<T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const url = endpoint.startsWith('http') 
      ? endpoint 
      : `${this.baseURL}${endpoint}`

    const headers = this.buildHeaders(options)

    const config: RequestInit = {
      method: options.method || 'GET',
      headers,
    }

    if (options.body && options.method !== 'GET') {
      config.body = typeof options.body === 'string' 
        ? options.body 
        : JSON.stringify(options.body)
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        const error = await this.handleError(response)
        throw error
      }

      // Handle empty responses
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        return await response.json()
      }

      return await response.text() as any
    } catch (error) {
      if (error instanceof Error && 'status' in error) {
        throw error
      }
      
      // Network or other errors
      throw {
        message: error instanceof Error ? error.message : 'Network error occurred',
        status: 0,
        statusText: 'Network Error',
      } as ApiError
    }
  }

  /**
   * Convenience methods
   */
  async get<T = any>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' })
  }

  async post<T = any>(endpoint: string, body?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body })
  }

  async put<T = any>(endpoint: string, body?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body })
  }

  async patch<T = any>(endpoint: string, body?: any, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'PATCH', body })
  }

  async delete<T = any>(endpoint: string, options?: Omit<RequestOptions, 'method' | 'body'>): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' })
  }

  /**
   * Set authentication token
   */
  setAuthToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token)
    }
  }

  /**
   * Clear authentication token
   */
  clearAuthToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token')
      localStorage.removeItem('api_token')
      localStorage.removeItem('api_key')
    }
  }
}

// Create default instance
export const apiClient = new ApiClient()

// Create instance for vehicle management API
export const vehicleApiClient = new ApiClient(
  process.env.NEXT_PUBLIC_VEHICLE_API_URL || 'https://vehicle-management-api-production.up.railway.app'
)

// Export types
export type { ApiError, RequestOptions }


