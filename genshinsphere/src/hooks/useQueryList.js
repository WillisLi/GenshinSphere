import { useQuery } from 'react-query';
import axios from 'axios';

const fetchList = async (type) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${type}`)
    return data;
}

export default function useQueryList(type) {
    return useQuery(`${type}List`, () => fetchList(type), { staleTime: 200000 })
}