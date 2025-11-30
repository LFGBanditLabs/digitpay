/**
 * Vehicle Management API Service
 * Specific service for interacting with the vehicle management API
 */

import { vehicleApiClient } from './api-client'

export interface Issue {
  id?: string
  title: string
  description: string
  status?: 'open' | 'in-progress' | 'resolved' | 'closed'
  priority?: 'low' | 'medium' | 'high' | 'critical'
  createdAt?: string
  updatedAt?: string
  [key: string]: any
}

export interface IssuesResponse {
  data: Issue[]
  total?: number
  page?: number
  limit?: number
}

/**
 * Get all issues
 */
export async function getIssues(): Promise<IssuesResponse> {
  try {
    const response = await vehicleApiClient.get<IssuesResponse>('/api/Issues', {
      requireAuth: true,
    })
    return response
  } catch (error: any) {
    console.error('Error fetching issues:', error)
    
    if (error.status === 403) {
      throw new Error(
        'Access forbidden. Please check your API key or authentication token. ' +
        'Make sure you have the correct permissions to access this resource.'
      )
    }
    
    throw error
  }
}

/**
 * Get a single issue by ID
 */
export async function getIssueById(id: string): Promise<Issue> {
  try {
    return await vehicleApiClient.get<Issue>(`/api/Issues/${id}`, {
      requireAuth: true,
    })
  } catch (error: any) {
    console.error(`Error fetching issue ${id}:`, error)
    throw error
  }
}

/**
 * Create a new issue
 */
export async function createIssue(issue: Omit<Issue, 'id' | 'createdAt' | 'updatedAt'>): Promise<Issue> {
  try {
    return await vehicleApiClient.post<Issue>('/api/Issues', issue, {
      requireAuth: true,
    })
  } catch (error: any) {
    console.error('Error creating issue:', error)
    throw error
  }
}

/**
 * Update an issue
 */
export async function updateIssue(id: string, issue: Partial<Issue>): Promise<Issue> {
  try {
    return await vehicleApiClient.put<Issue>(`/api/Issues/${id}`, issue, {
      requireAuth: true,
    })
  } catch (error: any) {
    console.error(`Error updating issue ${id}:`, error)
    throw error
  }
}

/**
 * Delete an issue
 */
export async function deleteIssue(id: string): Promise<void> {
  try {
    await vehicleApiClient.delete(`/api/Issues/${id}`, {
      requireAuth: true,
    })
  } catch (error: any) {
    console.error(`Error deleting issue ${id}:`, error)
    throw error
  }
}


