
// Add ndung vào
const placesInfo = {
    "buuDien": {
        title: 'BƯU ĐIỆN TRUNG TÂM THÀNH PHỐ',
        content: `
            <strong>Địa chỉ:</strong> 2 Công xã Paris, phường Bến Nghé, Quận 1<br>
            <strong>Giờ mở cửa:</strong> 07:00 – 19:00 (Thứ Hai đến Thứ Sáu); 07:00 – 18:00 (Thứ Bảy); 08:00 – 18:00 (Chủ nhật)<br>
            <strong>Mô tả:</strong> Bưu điện Trung tâm Thành phố (Bưu điện Sài Gòn) là một trong những công trình kiến trúc hiện đại mang giá trị nghệ thuật tiêu biểu được xây dựng ở Sài Gòn vào cuối thể kỷ 19 với phong cách kiến trúc cổ điển Châu Âu.<br>
            Khởi công xây dựng vào ngày 14/11/1886 và hoàn thành vào năm 1891 do hai kiến trúc sư người Pháp thiết kế theo phong cách Baroque và cổ điển Châu Âu.<br>
            <strong>Dịch vụ:</strong> Quầy hàng lưu niệm, gửi thư và bưu thiếp,...<br>
            <strong>Các tuyến xe bus gần nhất:</strong> 52, 18, 19.<br>
            <strong>Điểm đến lân cận:</strong> Nhà Thờ Đức Bà; Dinh Độc Lập; Đường Sách Nguyễn Văn Bình; Thảo Cầm Viên.<br>
            <strong>Tips:</strong> Từ 08:30 - 10:00 (thứ 7) hàng tuần, Bưu điện Thành phố có phục vụ biểu diễn hòa tấu nhạc cụ dân tộc.
        `,
        imageUrl: 'hinh/buudien.png'
    },
    "benBachDang": {
        title: 'BẾN BẠCH ĐẰNG',
        content: `
            <strong>Địa chỉ:</strong> 2 Tôn Đức Thắng, phường Bến Nghé, Quận 1.<br>
<strong>Giờ mở cửa:</strong> 24/7<br>
<strong>Mô tả:</strong> và bến sông bên bờ sông Sài Gòn tại Quận 1, trung tâm Thành phố Hồ Chí Minh, Việt Nam. Đây là nơi người dân thành phố và du khách tới 
vui chơi và là địa điểm ngắm pháo hoa mỗi dịp lễ, Tết.<br>
<strong>Dịch vụ:</strong> Các chuyến du thuyền tham quan, dịch vụ ăn uống tại các nhà hàng ven sông,...<br>
<strong>Các tuyến xe bus gần nhất:</strong> 36, 19, 24.<br>
<strong>Điểm đến lân cận:</strong> Bến Nhà Rồng; Phố đi bộ Nguyễn Huệ; Dinh Độc Lập.<br>
<strong>Tips:</strong> Nên đến vào buổi chiều để thưởng thức cảnh hoàng hôn trên sông Sài Gòn.
        `,
        imageUrl: 'hinh/BBD.png'
    },
    "toaNhaBitexco": {
        title: 'TÒA NHÀ BITEXCO',
        content: `
            <strong>Địa chỉ:</strong> Bến Bạch Đằng, phường Bến Nghé, Quận 1.<br>
<strong>Giờ mở cửa:</strong>  9:30 sáng đến 9:30 tối (Thứ 2 đến Chủ Nhật). Vé cuối cùng được bán vào lúc 8:45 tối hàng ngày.<br>
<strong>Mô tả:</strong> Tòa tháp Bitexco (Bitexco Financial Tower) ở độ cao 262 mét so với mặt đất, với ý tưởng thiết kế được lấy từ hình dáng búp sen, loài quốc hoa của Việt Nam và thể hiện văn hóa truyền thống của Việt Nam, khát vọng vươn lên của dân tộc. Một trong những điểm nhấn của tòa tháp chính là đài quan sát đầu tiên của thành phố tại lầu 49 có mở cửa bán vé cho khách tham quan. Công trình được thiết kế với gần 6,0000 tấm kính được cắt với kích thức riêng từng tấm và lắp vào vừa khít toàn nhà có dạng hình cong. Tòa nhà Bitexco hội tụ các thương hiệu thời trang nổi tiếng, chuỗi nhà hàng, cà phê, 
rạp chiếu phim sang trọng bậc nhất hiện nay để phục vụ du khách trong và ngoài nước. <br>
<strong>Các tuyến xe bus gần nhất:</strong> 20, 75, 12, v.v.<br>
<strong>Điểm đến lân cận:</strong> Phố đi bộ Nguyễn Huệ; Bưu điện Thành phố.<br>
        `,
        imageUrl: 'hinh/bitexco.jpg'
    },
    "phoDiBoBuiVien": {
        title: 'PHỐ ĐI BỘ BÙI VIỆN',
        content: `
            <strong>Địa chỉ:</strong> Bùi Viện, phường Phạm Ngũ Lão, Quận 1.<br>
    <strong>Giờ mở cửa:</strong> 19:00 – 02:00 (Thứ Sáu đến Chủ Nhật)<br>
    <strong>Mô tả:</strong> Được nhắc đến trong tập sách du lịch “Lonely Planet” trong những năm gần đây, khu phố Đề Thám – Bùi Viện – Đỗ Quang Đẩu – Phạm Ngũ Lão đã trở thành điểm đến ưa thích của nhiều du khách quốc tế khi đến thành phố Hồ Chí Minh. Phố đi bộ Bùi Viện chính thức ra mắt và đi vào hoạt động từ ngày 20 tháng 8 năm 2017, nơi đây được xem là một trong những tuyến phố náo nhiệt nhất tại thành phố.<br>
    Đến với Phố đi bộ Bùi Viện, du khách sẽ được trải nghiệm các dịch vụ như ăn uống, vui chơi, giải trí, làm đẹp và nghỉ ngơi, đáp ứng nhu cầu đa dạng của du khách. Vào tối thứ Bảy và Chủ Nhật hàng tuần, tại đây tổ chức 02 sân khấu biểu diễn văn nghệ phục vụ du khách, với sân khấu nhạc dân tộc tại khu vực số 33 đường Bùi Viện và sân khấu nhạc quốc tế tại khu vực số 202 Bùi Viện, mang đến các hoạt động giao lưu âm nhạc phong phú.<br>
    
    <strong>Các tuyến xe bus gần nhất:</strong> 03, 72, 96.<br>
    <strong>Điểm đến lân cận trong bán kính 500m:</strong> Chợ Bến Thành, Công viên 23 tháng 9.<br>
    <strong>Tips:</strong> Du khách nên đến Phố đi bộ Bùi Viện vào buổi tối cuối tuần để cảm nhận được không khí nhộn nhịp và sôi động nơi đây.<br>
        `,
        imageUrl: 'hinh/buivien.png'
    },
    "cotcoThuNgu": {
        title: 'CỘT CỜ THỦ NGỮ',
        content: `
        <strong>Địa chỉ:</strong> Bến Bạch Đằng, đường Tôn Đức Thắng, Phường Nguyễn Thái Bình, Quận 1<br>
    <strong>Mô tả:</strong> Công trình cột cờ Thủ Ngữ tọa lạc trên khu công viên có diện tích 2.907 m², tiếp giáp đường bờ kè sông Sài Gòn, được xây dựng vào thập niên 60 của thế kỷ XIX. Hơn 150 năm qua, cột cờ Thủ Ngữ là nơi chứng kiến những diễn biến lịch sử của thành phố trong hai cuộc kháng chiến chống Pháp và chống Mỹ.<br>
    
    Do vị trí thuận lợi, công thương nghiệp phát triển đã làm xuất hiện nhiều công trình kiến trúc phục vụ cho doanh thương và sản xuất công nghiệp. Khu vực Bến Nghé – Sài Gòn, các bến cảng được xây dựng phục vụ cho thương nghiệp ngày càng phát triển. Để tàu thuyền thuận tiện ra vào vận chuyển hàng hóa và biết thông tin tàu nhổ neo, cập bến, tàu di chuyển trên sông Sài Gòn, vào vàm rạch Bến Nghé và cả các tàu thuyền qua lại tiền cảng Vũng Tàu, người Pháp đã cho xây một cột tín hiệu rất cao, đứng xa hằng cây số vẫn nhìn thấy. Cột tín hiệu có tên gọi là Mât des Signaux (cột cờ Thủ Ngữ).<br>

    Ngày nay, cột cờ Thủ Ngữ không còn giữ chức năng báo hiệu cho tàu thuyền ra vào sông Sài Gòn, mà trở thành điểm ngắm cảnh, tham quan tìm hiểu cội nguồn - nơi ghi dấu những giá trị lịch sử hình thành và phát triển của thành phố - cho bao thế hệ người dân.<br>

    <strong>Các tuyến xe bus gần nhất:</strong> 02, 03, 19, 56, 88.<br>
    <strong>Điểm đến lân cận trong bán kính 500m:</strong> Bảo tàng Chủ tịch Hồ Chí Minh; Bảo tàng Tôn Đức Thắng; Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh; Miếu Bà Thiên Hậu; Chợ Bến Thành.<br>
        `,
        imageUrl: 'hinh/cotco.png'
    },
    "phoDiBoNguyenHue": {
        title: 'PHỐ ĐI BỘ NGUYỄN HUỆ',
        content: `
        <strong>Địa chỉ:</strong> Nguyễn Huệ, Phường Bến Nghé, Quận 1<br>
    <strong>Giờ mở cửa:</strong> 00:00 - 24:00 (Mỗi ngày)<br>
    <strong>Mô tả:</strong> Đường Nguyễn Huệ tiền thân là Kênh Lớn (hay kênh Chợ Vải), nơi diễn ra các hoạt động buôn bán vải vóc của các thương lái người Hoa. Trải qua nhiều giai đoạn hình thành và phát triển, ngày 30 tháng 4 năm 2015, đường Nguyễn Huệ được nâng cấp, cải tạo thành phố đi bộ đầu tiên của Thành phố, nơi có quảng trường đi bộ và hệ thống chiếu sáng nghệ thuật. Đặc biệt tại ngã tư Nguyễn Huệ - Lê Lợi và Nguyễn Huệ - Mạc Thị Bưởi, có hai hồ nhạc nước kết hợp trình diễn ánh sáng nghệ thuật tập trung.<br>

    Nơi đây thường xuyên tổ chức các buổi diễu hành, mít tinh, lễ hội đường phố, đường hoa, hoạt động triển lãm văn hóa, thể thao, biểu diễn nghệ thuật, … Phố đi bộ Nguyễn Huệ đã được phát sóng wifi miễn phí 24/24 giờ phục vụ du khách tham quan với tốc độ đường truyền cao, bảo đảm nhiều người có thể truy cập cùng lúc. Đây cũng là điểm hẹn cuối tuần của người dân thành phố và là nơi vui chơi giải trí của người dân Thành phố và khách du lịch.<br>

    <strong>Các tuyến xe bus gần nhất:</strong> 04, 18, 42, 56.<br>
    <strong>Điểm đến lân cận trong bán kính 500m:</strong> Trung tâm thương mại Vincom; Bảo tàng Thành phố Hồ Chí Minh; Khách sạn Rex; Nhà hát Thành phố; Khách sạn Continental.<br>
    <strong>Gợi ý dành cho du khách:</strong> Từ 17:00 – 23:00 (thứ 7, Chủ nhật, ngày lễ): cấm các loại xe lưu thông trên tuyến phố.<br>
        `,
        imageUrl: 'hinh/PDB.png'
    },
    // Thêm các địa điểm khác vào đây
};

//form ẩn
function toggleForm(event, content, imageUrl, title) {
    if (event) event.preventDefault(); // Ngăn chặn hành động mặc định

    const overlay = document.getElementById("overlay");
    const formContainer = document.getElementById("form-container");
    const formContent = document.getElementById("form-text");
    const formImage = document.getElementById("form-image");
    const formTitle = document.getElementById("form-title");

    // Kiểm tra trạng thái của form
    if (formContainer.style.display === "none" || formContainer.style.display === "") {
        overlay.style.display = "block"; // Hiện overlay
        formContainer.style.display = "block"; // Hiện form
        formContent.innerHTML = content; // Cập nhật nội dung form
        formImage.src = imageUrl; // Cập nhật hình ảnh
        formTitle.innerHTML = title; // Cập nhật tiêu đề
        document.body.style.overflow = "hidden"; // Ẩn thanh cuộn
    } else {
        overlay.style.display = "none"; // Ẩn overlay
        formContainer.style.display = "none"; // Ẩn form
        document.body.style.overflow = ""; // Khôi phục thanh cuộn
    }
}
//tim kiem
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('searchButton').addEventListener('click', function () {
        var searchTerm = document.getElementById('searchInput').value.trim();
        if (searchTerm) {
            window.location.href = "search_results_page.jsp?query=" + encodeURIComponent(searchTerm);
        } else {
            alert("Vui lòng nhập từ khóa tìm kiếm!"); // Thông báo nếu ô tìm kiếm trống
        }
    });
});