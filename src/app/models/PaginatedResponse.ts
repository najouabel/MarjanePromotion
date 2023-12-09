export interface PaginatedResponse<T> {
    totalPages: number,
    pageable: {
        pageNumber: number
    }
    content: T[]
}
// pagination response type