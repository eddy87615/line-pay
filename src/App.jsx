<<<<<<< HEAD
import { useState } from "react";
import "./App.css";
import gifts from "./gift";
import FallingLeaves from "./FallingLeaves";

import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
=======
import { useState } from 'react';
import './App.css';
import gifts from './gift';
import FallingLeaves from './FallingLeaves';

import { RxCross2 } from 'react-icons/rx';
import { IoMdArrowDropdown } from 'react-icons/io';

import CursorFollower from '../CursorFollower';
>>>>>>> origin/master

function App() {
  const [openItems, setOpenItems] = useState({});
  const [giftList, setGiftList] = useState(gifts);
  const [deletedItems, setDeletedItems] = useState(new Set()); // 追蹤被刪除的項目ID

  function listHandler(index) {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }

  function deleteHandler(index) {
    const deletedItem = giftList[index];

    // 添加到已刪除項目集合
    setDeletedItems((prev) => new Set([...prev, deletedItem.id]));

    // 刪除指定索引的禮品列表
    setGiftList((prev) => prev.filter((_, i) => i !== index));

    // 同時清理openItems中對應的狀態
    setOpenItems((prev) => {
      const newOpenItems = { ...prev };
      delete newOpenItems[index];

      // 重新整理其他項目的索引
      const updatedOpenItems = {};
      Object.keys(newOpenItems).forEach((key) => {
        const oldIndex = parseInt(key);
        if (oldIndex > index) {
          updatedOpenItems[oldIndex - 1] = newOpenItems[key];
        } else if (oldIndex < index) {
          updatedOpenItems[oldIndex] = newOpenItems[key];
        }
      });

      return updatedOpenItems;
    });
  }

  // 生成所有原始項目的ID列表（假設你的gifts有固定的ID範圍）
  const getAllItemIds = () => {
    // 如果你知道ID的範圍，可以這樣生成：
    const ids = [];
    for (let i = 1; i <= 28; i++) {
      // 假設有01到10
<<<<<<< HEAD
      ids.push(i.toString().padStart(2, "0"));
=======
      ids.push(i.toString().padStart(2, '0'));
>>>>>>> origin/master
    }
    return ids;

    // 或者從原始gifts數據中提取：
    // return gifts.map(item => item.id);
  };

  return (
    <>
<<<<<<< HEAD
=======
      <CursorFollower />
>>>>>>> origin/master
      <div className="feifei">
        <img src="/ICb31ih.gif" />
      </div>
      <div className="body">
        <div className="top">
          <div className="img-frame">
            <img src="/LINE_ALBUM_20250610獨立合照_250620_1.jpg" />
          </div>
          <div className="topTitle">
            <h1>不正常人類楓之谷研究中心</h1>
            <h2>第一屆棋靈王大賽獎品專區</h2>
          </div>
        </div>

        {/* 固定位置的狀態顯示小方塊 */}
        <div className="status-panel">
          <h4>禮物選擇狀態</h4>
          <div className="status-grid">
            {getAllItemIds().map((id) => (
              <a
                href={`#${id}`}
                key={id}
                className={`status-item ${
<<<<<<< HEAD
                  deletedItems.has(id) ? "deleted" : "active"
                }`}
              >
                {deletedItems.has(id) ? "❌" : id}
=======
                  deletedItems.has(id) ? 'deleted' : 'active'
                }`}
              >
                {deletedItems.has(id) ? '❌' : id}
>>>>>>> origin/master
              </a>
            ))}
          </div>
          <div className="gif">
            <img src="ff504a7168e4744ddfcc1e7f314fe216.gif" />
            <img src="8jvXNI6.gif" />
            <img src="y1N8iRJ.gif" />
            <img src="LADAQ8A.gif" />
            <img src="Yv2eqbA.gif" />
          </div>
        </div>

        <section className="list">
          {giftList.map((list, index) => (
            <div key={index} className="giftList" id={list.id}>
              <div className="listTitle" onClick={() => listHandler(index)}>
                <h3>
                  {list.id}．{list.name}
                </h3>
                <div>
                  <IoMdArrowDropdown
<<<<<<< HEAD
                    className={openItems[index] ? "unrotate" : "rotate"}
=======
                    className={openItems[index] ? 'unrotate' : 'rotate'}
>>>>>>> origin/master
                  />
                </div>
              </div>
              <div
                className={
<<<<<<< HEAD
                  openItems[index] ? "giftItems_show" : "giftItems_hidden"
=======
                  openItems[index] ? 'giftItems_show' : 'giftItems_hidden'
>>>>>>> origin/master
                }
              >
                <ul>
                  {list.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <strong>{item.giver}</strong>：{item.reward}
                    </li>
                  ))}
                </ul>

                <div key={index} className="npc">
                  {list.img &&
<<<<<<< HEAD
                    ["02", "03", "04"].includes(list.id) &&
=======
                    ['02', '03', '04'].includes(list.id) &&
>>>>>>> origin/master
                    Array.from({ length: 5 }, (_, index) => (
                      <img key={index} src={list.img} />
                    ))}
                </div>
<<<<<<< HEAD
                {list.img && !["02", "03", "04"].includes(list.id) && (
=======
                {list.img && !['02', '03', '04'].includes(list.id) && (
>>>>>>> origin/master
                  <div className="npc">
                    <img src={list.img} />
                  </div>
                )}

                <div
                  className="deleteBtn"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteHandler(index);
                  }}
                >
                  刪除
                  <RxCross2 />
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <FallingLeaves />
    </>
  );
}

export default App;
