import React from 'react';
import { data } from '../../constants';
import './revenue-list.scss'
import ProgressBar from '../progressbar/ProgressBar';

const RevenueList = () => {
  return <ul className='revenue-list'>
      {
        data.revenueByChannel.map((item, index) => (
          <li key={index} className="revenue-list_item">
            <div className="revenue-list_item_title">
              {item.title}
              <span className={`
                ${item.value < 50 ? 'txt-success' : 'txt-danger'}
              `}>
                {item.value}%
              </span>
            </div>
            <div>
              <ProgressBar value={item.value}  />
            </div>
          </li>
        ))
      }
  </ul>;
};

export default RevenueList;
