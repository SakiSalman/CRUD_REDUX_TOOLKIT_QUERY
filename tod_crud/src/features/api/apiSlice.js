
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath : "api",
    tagTypes : ['TODOS'],
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:5050'
    }),
    endpoints : (builder) => ({
        fetchData : builder.query({
            query : () => '/todo',
            providesTags : () => [{ type: 'TODOS' }]
        }),
        getSingelTodo : builder.query({
           query :(name) => `/todo/${name}`
        })
        ,
        deleteTodo : builder.mutation({
           query :(id) =>({
            url : `/todo/${id}`,
            method : "DELETE",
           }),
           invalidatesTags : ["TODOS"]
        })
        ,
        updateTodo : builder.mutation({
           query :(id) =>({
            url : `/todo/${id}`,
            method : "PATCH",
           }),
           invalidatesTags : ["TODOS"]
        })
        ,
        createTodo : builder.mutation({
           query :(data) => ({
            url: `/todo`,
            method: 'POST',
            body: data,
           }),
           invalidatesTags: ['TODOS']
           
        })
    })
})





export const {useFetchDataQuery, useUpdateTodoMutation, useGetSingelTodoQuery, useCreateTodoMutation, useDeleteTodoMutation} = apiSlice