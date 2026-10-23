import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('myProfile');
    return saved ? JSON.parse(saved) : { name: '', title: '', desc: '' };
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('myProfile', JSON.stringify(profile));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen p-8 bg-[#0B0F1A] flex justify-center items-center">
      <div className="w-full max-w-md bg-[#1A2235] p-8 rounded-xl shadow-2xl border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">后台个人信息管理</h2>
        
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">姓名</label>
            <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} className="w-full bg-[#0B0F1A] border border-gray-600 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">职位/头衔</label>
            <input type="text" value={profile.title} onChange={e => setProfile({...profile, title: e.target.value})} className="w-full bg-[#0B0F1A] border border-gray-600 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-blue-500 outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">个人简介</label>
            <textarea value={profile.desc} onChange={e => setProfile({...profile, desc: e.target.value})} rows="4" className="w-full bg-[#0B0F1A] border border-gray-600 rounded-lg p-2.5 text-white focus:ring-2 focus:ring-blue-500 outline-none" required></textarea>
          </div>
          
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all">
            {saved ? '保存成功！' : '保存修改'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-blue-400 hover:underline">返回前台首页</Link>
        </div>
      </div>
    </div>
  );
}