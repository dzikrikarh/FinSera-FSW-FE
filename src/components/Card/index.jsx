import React, { forwardRef, useRef } from "react";
import Success from "@/assets/img/Success.svg";
import Button from "@/components/Button/index";
import logoFinsera from "@/assets/img/logoFinsera.svg";
import "./style.css";
import { formatRupiah } from "@/lib/utils";
import { useScreenshot, createFileName } from "use-react-screenshot";

export const CardVertical = ({ className, children, data, ...rest }) => {
  const date = (new Date()).toLocaleDateString()
  
  const layoutRef = useRef(null)
  const [image, takeScreenshot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0
  });

  const download = (image, { name = `TRANSFER-SESAMA-BANK-${date}`, extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  }
  
  const getImage = () => takeScreenshot(layoutRef.current).then(download)
  
  return (
    <>
      {children}
      <div className={`card text-center ${className}`} {...rest} ref={layoutRef}>
        <img
          className="m-auto my-3 my-md-5 w-20"
          src={Success}
          alt="Transfer Success"
        />
        <span role="label" aria-label="Transaksi Berhasil">
          <h1 className="fw-bold">Transaksi Berhasil</h1>
        </span>
        <div className="card-body">
          <span role="label" aria-label="Tanggal : 21 June 2024 | 12:45 WIB">
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Tanggal</h5>
              <h5 className="fw-bold col-auto">{data.transaction_date}</h5>
            </div>
          </span>
          <span role="label" aria-label="Nomor Transaksi : 12356676787878">
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Nomor Transaksi</h5>
              <h5 className="fw-bold col-auto">{data.transaction_num}</h5>
            </div>
          </span>
          <hr />
          <span role="label" aria-label="Penerima : Putra Ardiansyah">
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Penerima</h5>
              <h5 className="fw-bold col-auto">{data.name_recipient}</h5>
            </div>
          </span>
          <span
            role="label"
            aria-label="Jenis Transaksi : Transfer Sesama Bank"
          >
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Jenis Transaksi</h5>
              <h5 className="fw-bold col-auto">Transfer Sesama Bank</h5>
            </div>
          </span>
          <span role="label" aria-label="Jumlah : Rp 2.000.000">
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Jumlah</h5>
              <h5 className="fw-bold col-auto">{data.nominal}</h5>
            </div>
          </span>
          <span role="label" aria-label="Catatan : Bayar Utang">
            <div className="row justify-content-between mb-3 mb-sm-5">
              <h5 className="col-auto">Catatan</h5>
              <h5 className="fw-bold col-auto">{data.note}</h5>
            </div>
          </span>
          <div className="row justify-content-evenly mb-4 mb-sm-5">
            <Button
              className={"col-5 col-sm-4 base-color shadow-hover"}
              type="button"
              aria-label="Download"
              onClick={getImage}
            >
              <i className="fa fa-download me-2"></i> Download
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export function CardHorizontal({ className, first, second, data, ...rest }) {
  return (
    <div className={`card ${className} p-1`} {...rest}>
      <div className="d-flex">
        <div
          className={`${first} mx-sm-3 ms-1 d-flex align-items-center justify-content-center`}
        >
          <div className="circle">
            <p className="text">P</p>
          </div>
        </div>
        <div className={`${second} p-0`}>
          <div className="card-body px-0">
            <span role="label" aria-label={`nama : ${data.name_recipient}`}>
              <h5 className="card-title">{data.name_recipient}</h5>
            </span>
            <span role="label" aria-label="akun Bank BCA">
              <h6 className="card-subtitle text-body-secondary">
                {data.bank_name}
              </h6>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardTransfer({ className, first, second, data }) {
  return (
    <div className={`card ${className}`}>
      <div className="d-flex">
        <div
          className={`d-flex align-items-center justify-content-center me-1 me-sm-3`}
          style={{
            borderRadius: "5px 100px 100px 5px",
            backgroundColor: "#E4EDFFE5",
          }}
        >
          <img className="side-logo" src={logoFinsera} alt="Bank BCA" />
        </div>
        <div className={`flex-grow-1 d-flex align-items-center me-0`}>
          <div className="card-body">
            <span role="label" aria-label="nomor rekening : 1234 567 897 890">
              <h5 className="fw-bold">{data.username}</h5>
            </span>
            <span role="label" aria-label="nama : RAMADHAN ADI">
              <h5 className="card-subtitle text-body-secondary">
                {data.accountNumber}
              </h5>
            </span>
            <span
              role="label"
              aria-label={`Saldo : ${formatRupiah(data.amount.amount)}`}
            >
              <h4 className="fw-bold text-primary">
                {formatRupiah(data.amount.amount)}
              </h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardInfoSaldo({ className, first, second, data }) {
  return (
    <div className={`card ${className}`}>
      <div className="d-flex">
        <div
          className={`d-flex align-items-center justify-content-center me-1 me-sm-3`}
          style={{
            borderRadius: "5px 100px 100px 5px",
            backgroundColor: "#E4EDFFE5",
          }}
        >
          <img className="side-logo" src={logoFinsera} alt="Bank BCA" />
        </div>
        <div className={`flex-grow-1 d-flex align-items-center me-0`}>
          <div className="card-body">
            <span role="label" aria-label="Saldo Aktif">
              <h5 className="fw-bold">Saldo Aktif</h5>
            </span>
            <span
              role="label"
              aria-label={`Saldo : ${formatRupiah(data.amount)}`}
            >
              <h4 className="fw-bold text-primary">
                {formatRupiah(data.amount)}
              </h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

CardHorizontal.defaultProps = {
  first: "col-md-auto",
  second: "col-md-auto",
};

export default { CardVertical, CardTransfer, CardHorizontal, CardInfoSaldo };
