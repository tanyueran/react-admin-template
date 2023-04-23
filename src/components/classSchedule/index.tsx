import React, { useMemo } from 'react';
import Style from './index.module.scss';
import {
  MinusCircleOutlined,
  SnippetsOutlined,
  EnvironmentOutlined,
  UserOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

export type classScheduleType = {
  id: string;
  className: string;
  teacher: string;
  children: {
    date: string;
    day: string;
    children: {
      time?: string;
      title?: string;
      desc?: string;
      // 是否冲突
      descError?: boolean;
      addrError?: boolean;
      teacherError?: boolean;
    }[];
  }[];
};

/**
 * 课程表格组件
 * @param param0 课程数据
 * （注意：每个班，日期数据长度需要一致，例如：有三天要上课，则每个班必须含有day1,day2,day3的数据，具体课程明细可为空数组）
 * @returns
 */
const CourseTable = ({
  classSchedule,
  deleteClassHandler,
  deleteItemHandler,
  boxRef,
}: {
  boxRef: any;
  classSchedule: classScheduleType[];
  deleteClassHandler: (item: any) => void;
  deleteItemHandler: (item: any) => void;
}) => {
  // 数据填充，保证没有空白
  const list = useMemo(() => {
    if (classSchedule.length === 0) return [];
    let arr: classScheduleType[] = JSON.parse(JSON.stringify(classSchedule));
    // 遍历日期
    arr[0].children.forEach((item, i) => {
      // 一天课程数最大值
      let maxCount = 0;
      arr.forEach((item2, j) => {
        if (j === 0) {
          maxCount = item2.children[i].children.length;
        } else {
          if (item2.children[i].children.length > maxCount) {
            maxCount = item2.children[i].children.length;
          }
        }
      });
      arr = arr.map((item3, k) => {
        if (item3.children[i].children.length !== maxCount) {
          for (let i1 = 0; i1 < maxCount; i1++) {
            if (item3.children[i].children[i1] === undefined) {
              item3.children[i].children[i1] = {};
            }
          }
        }
        return item3;
      });
    });
    return arr;
  }, [classSchedule]);

  return (
    <div ref={boxRef} className={Style.container}>
      {/* 表头 */}
      <header className={Style.header}>
        {/* title */}
        <div className={[Style.title, Style.text, Style['cell']].join(' ')}>
          <span>课程</span>
          <span>时间</span>
        </div>
        {/* 班级 */}
        {list.map(item => {
          return (
            <div key={item.id} className={[Style['class-wrapper'], Style['cell']].join(' ')}>
              <div title={item.className}>{item.className}</div>
              <div>{item.teacher}</div>
              {/* 删除icon */}
              <MinusCircleOutlined onClick={() => deleteClassHandler(item)} />
            </div>
          );
        })}
      </header>
      <section className={Style['content-wrapper']}>
        {/* 横向的——某一天的所有班级课程的信息 */}
        {list.length > 0 &&
          list[0].children.map((item: any, i: number) => {
            return (
              <div key={item.date} className={Style['day-content-wrapper']}>
                {/* 日期 */}
                <div className={[Style['day-wrapper'], Style['cell']].join(' ')}>
                  <div>{item.date}</div>
                  <div>{item.day}</div>
                </div>
                {/* 课程 */}
                {list.map((item2, j) => {
                  // 具体日程明细
                  return (
                    <div key={j} className={Style['day-list-wrapper']}>
                      {item2.children[i]?.children?.map((item3: any, k: number) => {
                        return (
                          <div key={k} className={[Style['cell'], Style['item-wrapper']].join(' ')}>
                            <div>
                              <span>{item3.time}</span>
                              <span>{item3.title}</span>
                            </div>
                            {/* 描述文字 */}
                            {item3.desc && (
                              <div
                                title={item3.desc}
                                className={item3.descError ? Style['error-text'] : ''}
                              >
                                <SnippetsOutlined />
                                {item3.desc}
                              </div>
                            )}
                            {/* 地址 */}
                            {item3.addr && (
                              <div
                                title={item3.addr}
                                className={item3.addrError ? Style['error-text'] : ''}
                              >
                                <EnvironmentOutlined />
                                {item3.addr}
                              </div>
                            )}
                            {/* 上课老师 */}
                            {item3.teacher && (
                              <div className={item3.teacherError ? Style['error-text'] : ''}>
                                <UserOutlined />
                                {item3.teacher}
                              </div>
                            )}
                            {/* 删除icon */}
                            {item3.time && item3.title && (
                              <CloseCircleOutlined
                                onClick={() => deleteItemHandler(item3)}
                                className={Style['delete-item-btn']}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default CourseTable;
