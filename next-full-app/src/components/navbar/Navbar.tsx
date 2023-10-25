import { Ultra } from 'next/font/google';
import Link from 'next/link'
import React from 'react';

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contacts",
      url: "/contacts",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
const Navbar = () => {
  return (
    <div>
        <Link href="/">Lammamias</Link>
        <div>
         {links.map(x => (<Link key={x.id} href={x.url}>{x.title}</Link>))}
        </div>
    </div>
  )
}

export default Navbar