function startListening() {
  // 상태 문구를 변경
  document.getElementById('status').innerText = '듣고 있습니다...';
}
function reset() {
  // 원래 문구로 되돌림
  document.getElementById('status').innerText = '음성으로 말씀하시면 바로 도와드립니다';
}
function openComplaintGuide() {
 window.location.href = "guide.html";
}
