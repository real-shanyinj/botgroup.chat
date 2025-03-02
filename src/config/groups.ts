//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode: boolean;
}

export const groups: Group[] = [
  {
    id: 'group1',
    name: '战略分析群',
    description: '分析各种关于赚钱的事情',
    members: [ 'ai4', 'ai5', 'ai7', 'ai9'],
    isGroupDiscussionMode: true
  }, 
  {
    id: 'group2',
    name: '日常问题排查群',
    description: '分析各种日常问题',
    isGroupDiscussionMode: false,
    members: [ 'ai8', 'ai4', 'ai5', 'ai6', 'ai7', 'ai9'],
  },
  {
    id: 'group3',
    name: '情绪群',
    description: '分析各种日常问题',
    isGroupDiscussionMode: true,
    members: [ 'ai1', 'ai2', 'ai3','ai5‘],
  }
];
