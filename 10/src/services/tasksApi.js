import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost' }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => '/api/tasks',
    }),
    createTask: builder.mutation({
      query: (newTask) => ({
        url: '/api/tasks',
        method: 'POST',
        body: newTask,
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/api/tasks/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation } = tasksApi;
