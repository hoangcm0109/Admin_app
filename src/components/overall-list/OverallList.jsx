import React from 'react';
import './overall-list.scss'
import { data } from '../../constants';

const icons = [
    <i className='bx bx-receipt'></i>,
    <i className='bx bx-user'></i>,
    <i className='bx bx-cube'></i>,
    <i className='bx bx-dollar'></i>,
]
const OverallList = () => {
  return <ul className='overall-list'>
      {
          data.overall.map((item, index) => (
              <li className="overall-list_item" key={index}>
                  <div className="overall-list_item_icon">
                      {
                          icons[index]
                      }
                  </div>
                  <div className="overall-list_item_info">
                      <div className="title">
                          {
                              item.value
                          }
                      </div>
                      <span>{item.title}</span>
                  </div>
              </li>
          ))
      }
  </ul>;
};

export default OverallList;
