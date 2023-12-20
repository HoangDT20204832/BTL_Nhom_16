import React from "react";
import "./styles.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-info">
          <div className="grid">
            <div className="grid__row">
              <div className="grid__column-2-4">
                <div className="footer__top-heading">Chăm sóc khách hàng</div>
                <ul className="footer__top-list">
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      Trung tâm trợ giúp
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      Shopee Blog
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      Shopee Mail
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      Hướng dẫn mua hàng
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      Hướng dẫn bán hàng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="grid__column-2-4">
                <div className="footer__top-heading">Về Shoppe</div>
                <ul className="footer__top-list">
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      Giới thiệu về Shoppe Việt nam
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      Tuyển dụng
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      Điều khoản Shoppe
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      Chính hãng
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid__column-2-4">
                <div className="footer__top-heading">
                  Thanh toán
                  <div className="footer__top-pay">
                    <a href="/" className="footer__top-pay-link">
                      <img
                        src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8"
                        alt="mm"
                        className="footer__top-pay-img"
                      />
                    </a>
                    <a href="/" className="footer__top-pay-link">
                      <img
                        src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16"
                        alt="aa"
                        className="footer__top-pay-img"
                      />
                    </a>
                    <a href="/" className="footer__top-pay-link">
                      <img
                        src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                        alt=""
                        className="footer__top-pay-img"
                      />
                    </a>
                    <a href="/" className="footer__top-pay-link">
                      <img
                        src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c"
                        alt=""
                        className="footer__top-pay-img"
                      />
                    </a>
                    <a href="/" className="footer__top-pay-link">
                      <img
                        src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281"
                        alt=""
                        className="footer__top-pay-img"
                      />
                    </a>
                    <a href="/" className="footer__top-pay-link">
                      <img
                        src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09"
                        alt=""
                        className="footer__top-pay-img"
                      />
                    </a>
            
                  </div>
                </div>
              </div>

              <div className="grid__column-2-4">
                <div className="footer__top-heading">
                  Theo dõi chúng tôi trên
                </div>
                <ul className="footer__top-list">
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      <FacebookOutlined className="footer__top-icon"/>
                      Facebook
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      <InstagramOutlined className="footer__top-icon" />
                      Instagram
                    </a>
                  </li>
                  <li className="footer__top-item">
                    <a href="/" className="footer__top-link">
                      <LinkedinOutlined className="footer__top-icon" />
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>

              <div className="grid__column-2-4">
                <div className="footer__top-heading">
                  Tải ứng dụng Shoppe ngay
                </div>
                <div className="footer__top-dowload">
                  <a href="/" className="footer__top-dowload-qr-link">
                    <img
                      src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472"
                      alt=""
                      className="footer__top-dowload-qr"
                    />
                  </a>
                  <div className="footer__top-dowload-apps">
                    <a href="/" className="footer__top-dowload-link">
                      <img
                        src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163"
                        alt=""
                        className="footer__top-dowload-app-img"
                      />
                    </a>
                    <a href="/" className="footer__top-dowload-link">
                      <img
                        src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def"
                        alt=""
                        className="footer__top-dowload-app-img"
                      />
                    </a>
                    <a href="/" className="footer__top-dowload-link">
                      <img
                        src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0"
                        alt=""
                        className="footer__top-dowload-app-img"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__top-country">
          <div className="grid footer__top-country-wrap">
            <div className="footer__top-power">
              © 2023 Shopee. Tất cả các quyền được bảo lưu.
            </div>
            <div className="footer__top-country-list">
              <div className="footer__top-name">Quốc gia & Khu vực:</div>
              <div className="footer__top-country-name">
                <a href="/" className="footer__top-country-link">
                  Singapore
                </a>
              </div>
              <div className="footer__top-country-name">
                <a href="/" className="footer__top-country-link">
                  Indonesia
                </a>
              </div>
              <div className="footer__top-country-name">
                <a href="/" className="footer__top-country-link">
                  Đài Loan
                </a>
              </div>
              <div className="footer__top-country-name">
                <a href="/" className="footer__top-country-link">
                  Thái Lan
                </a>
              </div>
              <div className="footer__top-country-name">
                <a href="/" className="footer__top-country-link">
                  Malaysia
                </a>
              </div>
              <div className="footer__top-country-name">
                <a href="/" className="footer__top-country-link">
                  Việt Nam
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-heading">
          <div className="footer__bottom-heading-info">
            <a href="/" className="footer__bottom-heading-link">
              Chính sách bảo mật
            </a>
          </div>
          <div className="footer__bottom-heading-info">
            <a href="/" className="footer__bottom-heading-link">
              Quy chế hoạt động
            </a>
          </div>
          <div className="footer__bottom-heading-info">
            <a href="/" className="footer__bottom-heading-link">
              Chính sách vận chuyển
            </a>
          </div>
          <div className="footer__bottom-heading-info">
            <a href="/" className="footer__bottom-heading-link">
              Chính sách trả hàng và hoàn tiền
            </a>
          </div>
        </div>

        <div className="footer__bottom-list-icon">
          <a href="/" className="footer__bottom-icon-link">
            <img
              src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png"
              alt=""
              className="footer__bottom-icon-img"
            />
          </a>
          <a href="/" className="footer__bottom-icon-link">
            <img
              src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoCCDV.png"
              alt=""
              className="footer__bottom-icon-img"
            />
          </a>
          <a href="/" className="footer__bottom-icon-link">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3LNsouiRM4JTBr8C48WHd38xz8A70jr4ox00HJlMNuVdTBgdcPkGVOLx7Z7K0sOI8O8&usqp=CAU"
              alt=""
              className="footer__bottom-icon-img"
            />
          </a>
        </div>

        <div className="footer__bottom-name-company">Công ty TNHH Shopee</div>
        <ul className="footer__bottom-list-description">
          <li className="footer__bottom-desciption-item">
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
            Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
            đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </li>
          <li className="footer__bottom-desciption-item">
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên
            hệ: 024 73081221 (ext 4678){" "}
          </li>
          <li className="footer__bottom-desciption-item">
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
            lần đầu ngày 10/02/2015{" "}
          </li>
          <li className="footer__bottom-desciption-item">
            © 2023 - Bản quyền thuộc về Công ty TNHH Shopee{" "}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComp;
