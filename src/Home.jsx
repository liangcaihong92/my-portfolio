import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [profile, setProfile] = useState({ name: '', title: '', desc: '' });

  useEffect(() => {
    const saved = localStorage.getItem('myProfile');
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      {/* 模拟星空背景 */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      <div className="z-10 text-center space-y-6 px-4">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {profile.name || '你的名字'}
        </h1>
        <h2 className="text-2xl text-gray-400">{profile.title || '前端开发工程师 / 软件工程学生'}</h2>
        <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
          {profile.desc || '欢迎来到我的个人网站。这里展示了我的技能和项目。请点击下方按钮进入后台管理修改这段信息。'}
        </p>
        
        <div className="pt-8">
          <Link to="/admin" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-lg">
            进入后台管理
          </Link>
        </div>
      </div>
    </div>
  );
}