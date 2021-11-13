import { useQuery } from 'react-query';
import axios from 'axios';

const fetchBannerList = async (type) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/banners/${type}`)
    console.log(data)
    return data;
}

export default function useQueryBannerList(type) {
    return useQuery(`${type}Banner`, () => fetchBannerList(type), { staleTime: 200000 })
}