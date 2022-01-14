import { useState } from 'react';
import './directory.styles.scss'
import { MenuItem } from '../menu-item/menu-item.component'

export const Directory = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: "womens",
      size: 'large',
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: "mens",
      size: 'large',
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    },
  ]);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...item }) => <MenuItem key={id} {...item} />)}
    </div>
  )
}