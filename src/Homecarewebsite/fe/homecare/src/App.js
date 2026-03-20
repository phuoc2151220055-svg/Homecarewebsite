import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Component Page dùng chung cho các route chưa có nội dung
function Page({ title }) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <p className="mt-4 text-gray-600">Nội dung trang sẽ được cập nhật sau.</p>
    </main>
  );
}

export default function App() {
  return (
    // Dùng class của Tailwind thay cho inline-style để bao quát toàn bộ trang
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      <BrowserRouter>
        <Header />
        
        {/* pt-[100px] để đẩy nội dung xuống, tránh bị Header (đang fix cứng ở trên) che mất */}
        <div className="pt-[100px] flex-grow">
          <Routes>
            <Route path="/" element={<Page title="Trang chủ" />} />
            <Route path="/service" element={<Page title="Dịch vụ dọn nhà" />} />
            <Route path="/about" element={<Page title="Giới thiệu" />} />
            <Route path="/contact" element={<Page title="Liên hệ" />} />
            <Route path="/orders" element={<Page title="Đơn hàng" />} />
            <Route path="/lich-su-dat-hang" element={<Page title="Lịch sử đặt hàng" />} />
            <Route path="*" element={<Page title="404 - Không tìm thấy trang" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}