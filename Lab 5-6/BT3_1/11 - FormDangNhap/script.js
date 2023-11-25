function loginHandler() {
  if (txtUsername.value === "" || txtUsername.value === null) {
    lblNotify.innerText = "Bạn chưa nhập tên người dùng !";
    txtUsername.focus();
    return false;
  }

  if (txtPassword.value === "" || txtPassword.value === null) {
    lblNotify.innerText = "Bạn chưa nhập mật khẩu!";
    txtPassword.focus();
    return false;
  }

  if (txtUsername.value === "minhphan46" && txtPassword.value === "123456") {
    lblNotify.innerHTML = `<span>
      Chào bạn <strong> ${txtUsername.value}</strong>
      </span>`;
    return true;
  } else {
    lblNotify.innerText = "Tài khoản hoặc mật khẩu không đúng";
    txtUsername.select();
    return false;
  }
}
