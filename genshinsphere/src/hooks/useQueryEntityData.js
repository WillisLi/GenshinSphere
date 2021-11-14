import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async (cat, name) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${cat}/${name}`)
    return data;
}

export default function useQueryEntityData(cat, name) {
    return useQuery(`${cat}-${name}Data`, () => fetchData(cat, name), { staleTime: 200000 })
}