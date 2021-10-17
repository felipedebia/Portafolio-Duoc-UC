import swal2 from "sweetalert2";


let swal2HtmlContent = `<div>活動名稱：k</div>`;
swal2HtmlContent += `<div>外部借用： k</div>`;
swal2HtmlContent += `<div>活動人數：k</div>`;
swal2HtmlContent += `<div>申請人：k</div>`;
swal2HtmlContent += `<div>聯絡方式：k</div>`;
swal2HtmlContent += `<div>租借開始時間：k</div>`;
swal2HtmlContent += `<div>租借結束時間：k</div>`;


swal2.fire({
  title: '確認活動內容',
  html: swal2HtmlContent,
  footer: '<div>送出後無法修改且場地方最終審查權與取消場地的權力</div>',
  showCancelButton: true,
  confirmButtonText: '送出',
  cancelButtonText: '取消',
})