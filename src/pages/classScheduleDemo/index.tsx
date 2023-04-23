import React, { useState, useRef } from 'react';
import ClassSchedule from '../../components/classSchedule/index';

const about = () => {
  const boxRef = useRef<HTMLElement>();
  // 删除一个班级
  const deleteClassHandler = (item: any) => {
    console.log(item);
  };

  // 删除一个具体明细项
  const deleteItemHandler = (item: any) => {
    console.log(item);
  };
  const [list] = useState([
    {
      id: '1',
      className: '中华上下文明几千年来的风土人情，和人文历史',
      teacher: '张三',
      children: [
        {
          date: '03月12日',
          day: '周一',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月13日',
          day: '周二',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月14日',
          day: '周三',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道.雄赳赳，气昂昂，报道.雄赳赳，气昂昂，报道',
              descError: true,
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      className: '中国哲学史',
      teacher: '李四',
      children: [
        {
          date: '03月12日',
          day: '周一',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月13日',
          day: '周二',
          children: [],
        },
        {
          date: '03月14日',
          day: '周三',
          children: [],
        },
      ],
    },
    {
      id: '3',
      className: '中华上下文明几千年',
      teacher: '张三',
      children: [
        {
          date: '03月12日',
          day: '周一',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月13日',
          day: '周二',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月14日',
          day: '周三',
          children: [],
        },
      ],
    },
    {
      id: '4',
      className: '中华上下文明几千年来的风土人情，和人文历史',
      teacher: '张三',
      children: [
        {
          date: '03月12日',
          day: '周一',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月13日',
          day: '周二',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月14日',
          day: '周三',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
      ],
    },
    {
      id: '5',
      className: '中华上下文明几千年',
      teacher: '张三',
      children: [
        {
          date: '03月12日',
          day: '周一',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月13日',
          day: '周二',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月14日',
          day: '周三',
          children: [],
        },
      ],
    },
    {
      id: '6',
      className: '中华上下文明几千年来的风土人情，和人文历史',
      teacher: '张三',
      children: [
        {
          date: '03月12日',
          day: '周一',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月13日',
          day: '周二',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
        {
          date: '03月14日',
          day: '周三',
          children: [
            {
              time: '09:00-10:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
            {
              time: '10:00-11:30',
              title: '报道',
              desc: '雄赳赳，气昂昂，报道',
              addr: '学校操场',
              teacher: '张三',
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      {/* 课程表 */}
      <ClassSchedule
        boxRef={boxRef}
        deleteClassHandler={deleteClassHandler}
        deleteItemHandler={deleteItemHandler}
        classSchedule={list}
      />
    </div>
  );
};

export default about;
