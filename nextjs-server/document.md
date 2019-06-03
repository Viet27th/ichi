Khi người dùng cần login, một request đến express server đc gửi đi để login.
dữ liệu trả về sẽ là token. Client sẽ lưu token này vào cookie. 
Tất cả request sau này đến nextjs server đều có thể check token này.
còn request đến express server sẽ phải gửi token này trong authorization.

client cũng có thể sử dụng cookie này. Ví dụ như trong file _app.js, check token
theo kiểu nếu là nextjs server render hay client render thì cũng đều check cookie,
nếu cookie sắp hết hạn (trước khi hết hạn 1 ngày) sẽ tự động gửi 1 request refresh token.
Còn khi token đã hết hạn hoặc token ko chính xác thì ko gửi refresh.

Trong các trang cần login, ví dụ admin, redirect về trang login nếu ko login trước đó.
Nếu đã login rồi mà trang đó cần check quyền thì dùng thêm middleware check quyền, khi đó
middleware check login sẽ phải return để ngăn rằng nếu đã redirect đến login rồi tức là chưa login
hoặc login hết hạn trước đó thì ko cần phải chạy middleware check quyền nữa.

Nếu đã login rồi tức là pass qua middleware redirect nếu ko login thì chạy tiếp check quyền nếu 
cần thiết. Middleware sẽ phân tích cookie token để check, nếu ko đúng quyền truyền vào hàm thì sẽ
trả về "false", dựa vào giá trị này ta thực hiện cho hiện trang Error.

Vậy việc check các middleware này ko liên quan gì đến việc tự động gửi refresh token ở _app.js cả.
