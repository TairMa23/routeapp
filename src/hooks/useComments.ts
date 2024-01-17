import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

interface PostQuery {
    page: number;
    pageSize: number;
}

const useComments = (query:PostQuery) => useQuery<Comment[], Error>({
    queryKey: ['comments', query],
    queryFn: () => axios
        .get('https://jsonplaceholder.typicode.com/comments', {
            params: {
                _start: (query.page -1) * query.pageSize, 
                _limit: query.pageSize
            }
        })
        .then((res) => res.data),
        keepPreviousData: true
})

// const useComments = (query: PostQuery) => {

//     const fetchData = () =>
//     axios
//       .get<Comment[]>("https://jsonplaceholder.typicode.com/comments", {
//         params: {
//             _start: (query.page -1) * query.pageSize, 
//             _limit: query.pageSize
//         }
//       })
//       .then((res) => res.data);

//     return useQuery<Comment[], Error>({
//         queryKey: ["comments", query],
//         queryFn: fetchData,
//       });
// }

export default useComments;