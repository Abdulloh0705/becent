import React from 'react';
import './header.scss';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Header = () => {
  // Ma'lumotlarni olish uchun useQuery ishlatamiz
  const { data, error, isError, isFetching, isLoading } = useQuery({
    queryKey: ['products'], // Unikal kalit
    queryFn: async () => {
      const res = await axios.get('https://fakestoreapi.com/products'); // API chaqiruvi
      return res.data; // JSON formatdagi ma'lumotni qaytaramiz
    },
  });

  if (isFetching || isLoading) return <h2 className="title">Yuklanmoqda...</h2>;
  if (isError) return <h2 className="title2">Xatolik: {error.message}</h2>;

  return (
    <div className="container">
      <div className="product">
      {data?.map((product) => (
        <div className="product_card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title} </h2>
         
        </div>
      ))}
      </div>
    </div>
  );
};

export default Header;
