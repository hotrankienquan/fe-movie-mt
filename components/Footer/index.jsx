import Link from "next/link";
export default function Footer() {
  const handleClickToTop = (e) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-[#0F0F0FE6]">
        <div className="max-w-[1170px] text-white mx-auto">
          <section className="border-b-[1px] border-gray-500 grid md:grid-cols-5 md:gap-4 pb-4 pt-4">
            <div className="md:col-span-2">
              <div>logo</div>
              <div className="mt-6">
                <p className="text-justify text-sm max-w-[350px] w-full">
                  <Link href="#" className="font-bold text-[#408BEA]">
                    Phimmoi
                  </Link>
                  - Trang xem phim Online với giao diện mới được bố trí và thiết
                  kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các
                  website lớn với đa dạng các đầu phim và thể loại vô cùng phong
                  phú.
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <h3>Phim mới</h3>
              <ul className="text-[#408BEA] text-sm">
                <li className="m-2 ml-0">
                  <Link href="#">Phim khoa học</Link>
                </li>
                <li className="m-2 ml-0">
                  <Link href="#">Phim kinh dị</Link>
                </li>
                <li className="m-2 ml-0">
                  <Link href="#">Phim chiếu rạp</Link>
                </li>
                <li className="m-2 ml-0">
                  <Link href="#">Phim hình sự</Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto">
              <h3>Phim hay</h3>
              <ul className="text-[#408BEA] text-sm">
                <li className="m-2 ml-0">
                  <Link href="#">Phim Âu Mỹ</Link>
                </li>
                <li className="m-2 ml-0">
                  <Link href="#">Phim Hàn Quốc</Link>
                </li>
                <li className="m-2 ml-0">
                  <Link href="#">Phim Trung Quốc</Link>
                </li>
                <li className="m-2 ml-0">
                  <Link href="#">Phim Nhật Bản</Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto">
              <h3>Thông tin</h3>
              <ul className="text-[#408BEA] text-sm">
                <li className="m-2 ml-0">
                  <Link href="#">Giới thiệu</Link>
                </li>
                <li className="m-2 ml-0">
                  <Link href="#">Liên hệ chúng tôi</Link>
                </li>
                <li className="m-2 ml-0">
                  <Link href="#">Điều khoản sử dụng</Link>
                </li>
                <li className="m-2 ml-0">
                  <Link href="#">Chính sách riêng tư</Link>
                </li>
                <li className="m-2 ml-0">
                  <Link href="#">Khiếu nại bản quyền</Link>
                </li>
              </ul>
            </div>
          </section>
          <section className="flex justify-between items-center py-6">
            <div>Phimmoi</div>
            <div>
              <i className="fab fa-facebook-f p-4 border-r-[1px] border-gray-500"></i>
              <i className="fab fa-twitter p-4 border-r-[1px] border-gray-500"></i>
              <i className="fab fa-instagram p-4 border-r-[1px] border-gray-500"></i>
              <i className="fab fa-youtube p-4 "></i>

              <Link
                href="#"
                className="p-3 bg-gray-500 rounded"
                onClick={handleClickToTop}
              >
                <i className="fas fa-angle-up"></i>
              </Link>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
