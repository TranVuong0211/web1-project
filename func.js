createAdmin();
function chuyentien(num){

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' đ';
}
function taoID(){
    var id = '';
    id = String(new Date().getTime());
    return id;
}
function taodoituongSP(id, loai, ten, hang, hinh, gia){
    this.id = id;
    this.loai = loai;
    this.ten = ten;
    this.hang = hang;
    this.hinh = hinh;
    this.gia = gia;

}
function addSP() {
    var ten = document.getElementById('txtten').value;
    console.log(ten);

    var hang = document.getElementById('txthang').value;
    console.log(hang);

    var tien = document.getElementById('txttien').value;
    console.log(tien);

    var loai = document.getElementById('chonloai').value;
    console.log(loai);

    var tmp = document.getElementById('txthinh').value;
    var hinh = tmp.split("\\");
    console.log(hinh[2]);
    var filehinh = "img/sanpham/" + hinh[2];
    var id = taoID();

    var sanpham = new taodoituongSP(id, loai, ten, hang, filehinh, tien);
    var arrSP = JSON.parse(localStorage.getItem('sanpham'));
    arrSP.push(sanpham);
    localStorage.setItem('sanpham', JSON.stringify(arrSP));
    document.getElementById('txtten').value = '';
    document.getElementById('txthang').value = '';
    document.getElementById('txttien').value = '';
    document.getElementById('chonloai').value = '';
    document.getElementById('txthinh').value = '';
    alert('thêm sản phẩm mới thành công');
}

function taoSP(){
    if (localStorage.getItem("sanpham") == null){
        var arrSP =
            [
                { id: 1, loai: "MauVe", hang: "Mijello", ten: "Mijello Mission Gold", hinh: "img/sanpham/mijello.jpg", gia: 760000 },
                { id: 2, loai: "MauVe", hang: "Maries", ten: "Màu Maries hạng học sinh", hinh: "img/sanpham/marieshs.jpg", gia: 100000 },
                { id: 3, loai: "MauVe", hang: "Paul Rubens", ten: "Màu Paul Rubens", hinh: "img/sanpham/paulrubens.jpg", gia: 460000 },
                { id: 4, loai: "MauVe", hang: "Gansai Tambi", ten: "Màu Gansai Tambi", hinh: "img/sanpham/gansaitambi.jpg", gia: 300000 },
                { id: 5, loai: "MauVe", hang: "Owin", ten: "Màu Owin", hinh: "img/sanpham/owin.jpg", gia: 190000 },
                { id: 6, loai: "MauVe", hang: "Tuner", ten: "Màu Turner", hinh: "img/sanpham/turner.jpg", gia: 485000 },
                { id: 7, loai: "MauVe", hang: "Van Gogh", ten: "Màu Van Gogh", hinh: "img/sanpham/vangogh.jpg", gia: 460000 },
                { id: 8, loai: "MauVe", hang: "Viviva", ten: "Màu Viviva", hinh: "img/sanpham/viviva.jpg", gia: 480000 },
                { id: 9, loai: "MauVe", hang: "Leningrad", ten: "Màu Leningrad", hinh: "img/sanpham/lenin.jpg", gia: 480000 },
                { id: 10, loai: "MauVe", hang: "Lukas", ten: "Màu Lukas", hinh: "img/sanpham/lukas.jpg", gia: 620000 },
                { id: 11, loai: "MauVe", hang: "Sonet", ten: "Màu Sonet", hinh: "img/sanpham/sonet.jpg", gia: 190000 },
                { id: 12, loai: "MauVe", hang: "Roman", ten: "Màu Roman Szmal", hinh: "img/sanpham/roman.jpg", gia: 1360000 },
                { id: 13, loai: "MauVe", hang: "Sennelier", ten: "Màu Sennelier", hinh: "img/sanpham/sennelier.jpg", gia: 375000 },
                { id: 14, loai: "MauVe", hang: "Shinhan", ten: "Màu Shinhan", hinh: "img/sanpham/shinhan.jpg", gia: 190000 },
                { id: 15, loai: "MauVe", hang: "Ladoga", ten: "Màu Ladoga", hinh: "img/sanpham/ladoga.jpg", gia: 190000 },
                { id: 16, loai: "MauVe", hang: "Sonet", ten: "Màu Holbein", hinh: "img/sanpham/holbein.jpg", gia: 665000 },

                { id: 17, loai: "ButVe", hang: "Akashiya", ten: "Bút Akashiya", hinh: "img/sanpham/thinline.jpg", gia: 64000 },
                { id: 18, loai: "ButVe", hang: "Derwent", ten: "Bút chì Derwent", hinh: "img/sanpham/derwnet.jpg", gia: 18000 },
                { id: 19, loai: "ButVe", hang: "Tombow Mono", ten: "Bút chì Tombow Mono", hinh: "img/sanpham/tombow.jpg", gia: 75000 },
                { id: 20, loai: "ButVe", hang: "Kuretake", ten: "Bút Fudebiyori Metallic", hinh: "img/sanpham/fudebiyori.jpg", gia: 38000 },
                { id: 21, loai: "ButVe", hang: "Artsecret", ten: "Cọ Artsecret", hinh: "img/sanpham/artsecret.jpg", gia: 45000 },
                { id: 22, loai: "ButVe", hang: "Superior", ten: "Cọ Superior", hinh: "img/sanpham/superior.jpg", gia: 28000 },
                { id: 23, loai: "ButVe", hang: "Waterbrush", ten: "Cọ Waterbrush", hinh: "img/sanpham/waterbrush.jpg", gia: 40000 },
                { id: 24, loai: "ButVe", hang: "Transon", ten: "Cọ Trason", hinh: "img/sanpham/cotranson.jpg", gia: 200000 },

                { id: 32, loai: "GiayVe", hang: "Nabii", ten: "Sổ Sketch Nabii", hinh: "img/sanpham/sketch.jpg", gia: 75000 },
                { id: 33, loai: "GiayVe", hang: "White Nights", ten: "Giấy White Nights", hinh: "img/sanpham/whitenights.png", gia: 100000 },
                { id: 34, loai: "GiayVe", hang: "Strathmore", ten: "Giấy Strathmore", hinh: "img/sanpham/strathmore.png", gia: 50000 },
                { id: 35, loai: "GiayVe", hang: "Arches", ten: "Giấy Arches", hinh: "img/sanpham/arches.png", gia: 340000 },
                { id: 36, loai: "GiayVe", hang: "Umee", ten: "Giấy Umee", hinh: "img/sanpham/umee.jpg", gia: 72000 },
                { id: 37, loai: "GiayVe", hang: "Artistico", ten: "Giấy Artistico", hinh: "img/sanpham/artistico.jpeg", gia: 90000 },
                { id: 38, loai: "GiayVe", hang: "Baohong", ten: "Giấy Baohong", hinh: "img/sanpham/baohong.jpeg", gia: 85000 },
                { id: 39, loai: "GiayVe", hang: "WinsorNewton", ten: "Giấy Winsor&Newton", hinh: "img/sanpham/winsor.jpg", gia: 65000 },
                { id: 40, loai: "GiayVe", hang: "Canson", ten: "Sổ Canson 1557", hinh: "img/sanpham/canson.jpg", gia: 90000 },
                { id: 41, loai: "GiayVe", hang: "Potentate", ten: "Sổ Potentate", hinh: "img/sanpham/potentate.jpg", gia: 70000 },
                { id: 42, loai: "GiayVe", hang: "Nabii", ten: "Sổ Nabii", hinh: "img/sanpham/nabii.jpg", gia: 90000 },
                { id: 43, loai: "GiayVe", hang: "Montmarte", ten: "Bảng Mont Marte", hinh: "img/sanpham/montmarte.jpg", gia: 50000 },
                { id: 44, loai: "GiayVe", hang: "Happy", ten: "Giấy Happy", hinh: "img/sanpham/happy.jpg", gia: 40000 },
                { id: 45, loai: "GiayVe", hang: "Maypad", ten: "Giấy Maypad", hinh: "img/sanpham/maypad.jpg", gia: 100000 },
                { id: 46, loai: "GiayVe", hang: "Paul Rubens", ten: "Sổ Paul Rubens", hinh: "img/sanpham/paulrubenssketchbook.jpg", gia: 150000 },
                { id: 47, loai: "GiayVe", hang: "Holbein", ten: "Tập giấy Holbein Botanical", hinh: "img/sanpham/botanical.jpg", gia: 450000 },
            ];
        localStorage.setItem("sanpham", JSON.stringify(arrSP));
    }
}

function hienSP() {
    var url = document.location.href;
    var arrSP = JSON.parse(localStorage.getItem("sanpham"));
    var str = '';
    var tmp = url.split("?");
    console.log(tmp[0]);
    console.log(tmp[1]);


    if (tmp[1] == '' || tmp[1] == undefined || tmp[1].search("all") == 0) {
        if (tmp[1] == '' || tmp[1] == undefined) tmp[1] = "all&0";

        var dem = 0;
        var tmp1 = tmp[1].split("&");
        var loai = tmp1[0];
        var vitri = tmp1[1];
        console.log(vitri);

        for (var i = vitri; i < arrSP.length; i++) {
            str += '<div class="divsanpham" onclick="hienchitiet(' + arrSP[i].id + ');">' +
                '<a href ="#"><img src="' + arrSP[i].hinh + '"/> ' +
                '<h4 >' + arrSP[i].ten + '</h4>' +
                '<p style="color: red;font- size :15px">Giá: ' + chuyentien(arrSP[i].gia) + '</p></a></div>';
            dem++;
            if (dem == 8) break;
        }
        soTrang = Math.ceil(arrSP.length / 8);
        var lienket = '';
        for (var i = 1; i <= soTrang; i++){
            vitri = tmp1[1];
            console.log(vitri);
            if (vitri == (i - 1) * 8){
                vitri = (i - 1) * 8;
                var a = '<a href = "?all&' + vitri + '">' + i + '</a>'
                lienket += '<div id="sotrang" class="active">' + a + '</div>';
            }
            else{
                vitri = (i - 1) * 8;
                var a = '<a href = "?all&' + vitri + '">' + i + '</a>'
                lienket += '<div id="sotrang" >' + a + '</div>';
            }
        }
        document.getElementById("trang").innerHTML = lienket;
    }
    else {

        var dem = 0;
        var tmp1 = tmp[1].split("&");
        var loai = tmp1[0];

        console.log(loai);

        var vitri = tmp1[1];
        console.log(vitri);

        //mảng hiện thị theo loại
        var arr = [];
        for (var i = 0; i < arrSP.length; i++){
            console.log(loai);
            if (loai == arrSP[i].loai) arr.push(arrSP[i]);

        }
        console.log(arr.length);
        var lienkethang = ''
        var arrtmp = [];
        for (var i = 0; i < arr.length; i++){
            arrtmp.push(arr[i]);
        }

        console.log(arrtmp.length);
        //mảng không có trùng hãng
        for (var i = 0; i < arrtmp.length - 1; i++){
            var hangtmp1 = arrtmp[i].hang;
            for (var j = i + 1; j < arrtmp.length; j++){
                var hangtmp = arrtmp[j].hang;
                if (hangtmp == hangtmp1){
                    xoavt(j, arrtmp);
                    i--;
                }
            }
        }
        console.log(arrtmp.length);
        for (var i = 0; i < arrtmp.length; i++){
            lienkethang += '<div class id="hangSP"><a href = "index.html?' + arrtmp[i].loai + '&0-' + arrtmp[i].hang + '">' + arrtmp[i].hang + '</a></div>';
            document.getElementById("boLoc").style.display = "block";
        }
        document.getElementById("boLoc").innerHTML = lienkethang;

        //hiện thị lọc sản phẩm theo giá
        var lienketgia = '';
        if (loai != '' || loai != undefined) {
            lienketgia = '<label>Chọn mức giá:</label>' +
                '<a href="index.html?' + loai + '&0s=duoi-2-trieu">Dưới 200 </a>' +
                '<a href="index.html?' + loai + '&0s=2-4-trieu">Từ 500 - 1 Triệu </a>' +
                '<a href="index.html?' + loai + '&0s=tren-1-trieu">Trên 1 Triệu</a>';
        }
        document.getElementById("locGia").style.display = "block";

        document.getElementById("locGia").innerHTML = lienketgia;

        if (vitri.search('s') == 1) {
            console.log(loai);
            loctheogia(loai, vitri);
            return;
        }

        //hiện thị sản phẩm theo hãng
        for (var i = 0; i < arrSP.length; i++) {
            if (vitri.search(arrSP[i].hang) == 2) {
                console.log(loai);
                console.log(vitri);
                hienthihang(loai, vitri);
                return;
            }
        }

        for (var i = vitri; i < arr.length; i++) {
            str += '<div class="divsanpham" onclick="hienchitiet(' + arr[i].id + ');">' +
                '<a href ="#"><img src="' + arr[i].hinh + '"/> ' +
                '<h4 >' + arr[i].ten + '</h4>' +
                '<p style="color: red;font- size :15px">Giá: ' + chuyentien(arr[i].gia) + '</p></a></div>';
            dem++;
            if (dem == 8) break;
        }
        var soTrang = Math.ceil(arr.length / 8);
        if (soTrang > 1) {
            var lienket = '';
            for (var i = 1; i <= soTrang; i++) {
                vitri = tmp1[1];
                console.log(vitri);
                if (vitri == (i - 1) * 8) {
                    vitri = (i - 1) * 8;
                    var a = '<a href = "?' + loai + '&' + vitri + '">' + i + '</a>'
                    lienket += '<div id="sotrang" class="active">' + a + '</div>';
                }
                else {
                    vitri = (i - 1) * 8;
                    var a = '<a href = "?' + loai + '&' + vitri + '">' + i + '</a>'
                    lienket += '<div id="sotrang">' + a + '</div>';
                }
            }
            document.getElementById("trang").innerHTML = lienket;
        }
    }
    document.getElementById("sanpham").innerHTML = str;
}

function hienchitiet(idsp){
    document.getElementById("nenCT").style.display = "block";
    var arrSP = JSON.parse(localStorage.getItem("sanpham"));
    var s = '';
    for (var i = 0; i < arrSP.length; i++){
        if (arrSP[i].id == idsp) {
            console.log(arrSP[14]);
            document.getElementById("imgct").src = arrSP[i].hinh;
            document.getElementById("ten").innerHTML = arrSP[i].ten;
            document.getElementById("gia").innerHTML = 'Giá: ' + chuyentien(arrSP[i].gia);
        }
    }
    console.log(idsp);
    s += '<button id="btnGH" onclick="themvaoGH(' + idsp + ');">Thêm vào giỏ hàng</button>';
    document.getElementById('hiennutadd').innerHTML = s;

}

function dongchitiet() {
    var d = document.getElementById("nenCT");
    d.style.display = "none";
}

function hienthihang(loai, vitri){
    console.log(vitri);
    var tmp = vitri.split("-");
    console.log(tmp[1]);
    console.log(tmp[0]);
    var arrSP = JSON.parse(localStorage.getItem("sanpham"));
    var arrHang = [];
    for (var i = 0; i < arrSP.length; i++) {
        if (loai == arrSP[i].loai && tmp[1] == arrSP[i].hang)
            arrHang.push(arrSP[i]);
    }
    var s = '', dem = 0;
    for (var i = tmp[0]; i < arrHang.length; i++) {
        console.log(tmp[0]);
        s += '<div class="divsanpham" onclick="hienchitiet(' + arrHang[i].id + ');">' +
            '<a href ="#"><img src="' + arrHang[i].hinh + '"/> ' +
            '<h4 >' + arrHang[i].ten + '</h4>' +
            '<p style="color: red;font- size :15px">Giá: ' + chuyentien(arrSP[i].gia) + '</p></a></div>';
        dem++;
        if (dem == 8) break;
    }
    var soTrang = Math.ceil(arrHang.length / 8);
    var vitritmp = vitri;
    if (soTrang > 1) {
        var lienket = '';
        for (var i = 1; i <= soTrang; i++) {
            vitritmp = vitri;
            console.log(vitri);
            if (vitritmp == (i - 1) * 8) {
                vitritmp = (i - 1) * 8;
                var a = '<a href = "?' + loai + '&' + vitritmp + '-' + tmp[1] + '">' + i + '</a>'
                lienket += '<div id="sotrang" class="active">' + a + '</div>';
            }
            else {
                vitritmp = (i - 1) * 8;
                var a = '<a href = "?' + loai + '&' + vitritmp + '-' + tmp[1] + '">' + i + '</a>'
                lienket += '<div id="sotrang">' + a + '</div>';
            }
        }
        document.getElementById("trang").innerHTML = lienket;
    }

    document.getElementById("sanpham").innerHTML = s;
}

function xoavt(vt, mang) {
    for (var i = vt + 1; i < mang.length; i++){
        mang[i - 1] = mang[i];
    }
    mang.length--;
}

function loctheogia(loai, vitri){
    console.log(vitri);
    var tmp = vitri.split('s=');
    console.log(tmp[1]); //giá
    var gia = tmp[1];
    console.log(tmp[0]);
    var arrSP = JSON.parse(localStorage.getItem("sanpham"));
    var arrGia = [];
    for (var i = 0; i < arrSP.length; i++){
        if (gia.search("duoi") == 0){
            console.log(gia);
            if (loai == arrSP[i].loai && arrSP[i].gia < 200000) arrGia.push(arrSP[i]);
        }
        if (gia.search('2') == 0){
            console.log(gia);
            if (loai == arrSP[i].loai && arrSP[i].gia >= 500000 && arrSP[i].gia < 1000000)
                arrGia.push(arrSP[i]);
        }
        if (gia.search("tren") == 0) {
            if (loai == arrSP[i].loai && arrSP[i].gia >= 1000000) arrGia.push(arrSP[i]);
        }
    }

    console.log(arrGia[9]);
    var s = '', dem = 0;
    for (var i = tmp[0]; i < arrGia.length; i++) {
        console.log(tmp[0]);
        s += '<div class="divsanpham" onclick="hienchitiet(' + arrGia[i].id + ');">' +
            '<a href ="#"><img src="' + arrGia[i].hinh + '"/> ' +
            '<h4 >' + arrGia[i].ten + '</h4>' +
            '<p style="color: red;font- size :15px">Giá: ' + chuyentien(arrGia[i].gia) + '</p></a></div>';
        dem++;
        if (dem == 8) break;
    }

    var soTrang = Math.ceil(arrGia.length / 8);
    var vitritmp = tmp[0];
    if (soTrang > 1) {
        var lienket = '';
        for (var i = 1; i <= soTrang; i++) {
            vitritmp = tmp[0];
            console.log(vitritmp);
            if (vitritmp == (i - 1) * 8) {
                vitritmp = (i - 1) * 8;
                var a = '<a href = "?' + loai + '&' + vitritmp + 's=' + gia + '">' + i + '</a>'
                lienket += '<div id="sotrang" class="active">' + a + '</div>';
            }
            else {
                vitritmp = (i - 1) * 8;
                var a = '<a href = "?' + loai + '&' + vitritmp + 's=' + gia + '">' + i + '</a>'
                lienket += '<div id="sotrang">' + a + '</div>';
            }
        }
        document.getElementById("trang").innerHTML = lienket;
    }

    document.getElementById("sanpham").innerHTML = s;
}

function tangSL(){
    document.getElementById('value').value++;
}

function giamSL(){
    if (document.getElementById('value').value > 1)
        document.getElementById('value').value--;
}

function giamSL(id){
    var cartArray = JSON.parse(localStorage.getItem('giohang'));
    for (var i = 0; i < cartArray.length; i++) {
        if (cartArray[i].id == id) {
            if (cartArray[i].soluong > 1)
                cartArray[i].soluong--;
        }
    }
    localStorage.setItem('giohang', JSON.stringify(cartArray));
    hienthiGH();
}

function tangSL(id){
    var cartArray = JSON.parse(localStorage.getItem('giohang'));
    for (var i = 0; i < cartArray.length; i++) {
        if (cartArray[i].id == id) {
            cartArray[i].soluong++;
        }
    }
    localStorage.setItem('giohang', JSON.stringify(cartArray));
    hienthiGH();
}

//để tạo đối tượng mới khi chưa có trong giỏ hàng
function taodoituongSPgh(id, soluong){ 
    var sanphamGH = new Object();
    sanphamGH.id = id;
    sanphamGH.soluong = soluong;
    return sanphamGH;
}

function layDSsanphamGH(){
    var arr = [];
    if (localStorage.getItem('giohang') != null) {
        arr = JSON.parse(localStorage.getItem('giohang'));
    }
    return arr;
}

function luu(ds){ //lưu vào local danh sách giỏ hàng
    localStorage.setItem('giohang', JSON.stringify(ds));
}

function themvaoGH(id){
    var ktID = false;
    var arrGH = layDSsanphamGH();
    for (var i = 0; i < arrGH.length; i++){
        if (id == arrGH[i].id) {
            arrGH[i].soluong++;
            ktID = true;
        }
    }
    if (ktID == false){
        var sanphamGH = taodoituongSPgh(id, 1);
        arrGH.push(sanphamGH);
    }
    luu(arrGH);
    dongchitiet();
    customAlert('Thêm vào giỏ hàng thành công', 'success')
}

function laySPtheoID(id){
    var sanpham = new Object();
    var arrSP = JSON.parse(localStorage.getItem('sanpham'));
    for (var i = 0; i < arrSP.length; i++) {
        if (arrSP[i].id == id) sanpham = arrSP[i];
    }
    return sanpham;
}

function spGHsangHtml(sanphamGH){
    var sanpham = laySPtheoID(sanphamGH.id);
    var html = '   <div id="thongtincart">  ' +
        '               <div id="hinh" >  ' +
        '                   <img  src="' + sanpham.hinh + '">  ' +
        '               </div>  ' +
        '               <p id="tenSP">' + sanpham.ten + '</p>  ' +
        '               <div id="gia">' + chuyentien(sanpham.gia) + '</div>  ' +
        '               <div id="soluong">  ' +
        '                   <div id="giam" onClick="giamSL(' + sanpham.id + ');">-</div>  ' +
        '                   <input type="text" id="value" value="' + sanphamGH.soluong + '" onkeypress="return event.charCode >= 48 && event.charCode <= 57" onchange = "capnhatSL(this.value,' + sanpham.id + ')"> ' +
        '                   <div id="tang" onClick="tangSL(' + sanpham.id + ');">+</div>  ' +
        '                     ' +
        '               </div>  ' +
        '               <div id="tongtien">' + chuyentien(sanpham.gia * sanphamGH.soluong) + '</div>  ' +
        '               <div id="hanhdong" onclick = "xoaSPghtheoID(' + sanpham.id + ')">  ' +
        '                   <i class="far fa-trash-alt"></i>  ' +
        '               </div>  ' +
        '               <div style="clear: both;"></div>  ' +
        '          </div>  ';
    return html;
}

function capnhatSL(value, id){
    var arrGH = JSON.parse(localStorage.getItem('giohang'));
    for (var i = 0; i < arrGH.length; i++) {
        if (arrGH[i].id == id) arrGH[i].soluong = value;
    }
    localStorage.setItem('giohang', JSON.stringify(arrGH));
    hienthiGH();
}

function hienthiGH(){
    if (localStorage.getItem('giohang') != null){
        var arrGH = JSON.parse(localStorage.getItem('giohang'));
        var htmltong = '', s = 0;

        for (var i = 0; i < arrGH.length; i++){
            htmltong += spGHsangHtml(arrGH[i]);
            s += tongTungSP(laySPtheoID(arrGH[i].id).gia, arrGH[i].soluong);
            console.log(laySPtheoID(arrGH[i]).gia);
        }
        document.getElementById('giohang').innerHTML = htmltong;
        document.getElementById('tongcong').innerHTML = chuyentien(s);
    }
    else hienthighrong();
}

function tongTungSP(gia, soluong){
    return soluong * gia;
}

function xoaSPghtheoID(id){
    var arrGH = JSON.parse(localStorage.getItem('giohang'));
    for (var i = 0; i < arrGH.length; i++) {
        if (arrGH[i].id == id)
            arrGH.splice(i, 1);
    }
    localStorage.setItem('giohang', JSON.stringify(arrGH));
    hienthighrong();
    hienthiGH();
}

function hienthighrong(){
    var htmlrong = '   <img src="img/cart-empty.png" style="height: 100px;" >  ' +
        '               <p>Không có sản phẩm nào trong giỏ hàng</p>  ' +
        '              <div><a href="index.html">Về trang chủ</a></div>  ';
    var arrGH = JSON.parse(localStorage.getItem('giohang'));
    if (localStorage.getItem('giohang') != null) {
        if (arrGH.length == 0) {
            console.log(1);
            document.getElementById('ghrong').style.display = "block";
            document.getElementById('ghrong').innerHTML = htmlrong;
            document.getElementById('khicoSP').style.display = "none";
            document.getElementById('tieudeGH').style.display = "none";
            document.getElementById('tongtienallSP').style.display = "none";
            document.getElementById('thanhtoan').style.display = "none";
        }
        else {
            document.getElementById('khicoSP').style.display = "block";
            document.getElementById('tieudeGH').style.display = "block";
            document.getElementById('tongtienallSP').style.display = "block";
            document.getElementById('thanhtoan').style.display = "block";
        }
    }
    else {
        document.getElementById('ghrong').style.display = "block";
        document.getElementById('ghrong').innerHTML = htmlrong;
        document.getElementById('khicoSP').style.display = "none";
        document.getElementById('tieudeGH').style.display = "none";
        document.getElementById('tongtienallSP').style.display = "none";
        document.getElementById('thanhtoan').style.display = "none";
    }

}
var slideIndex = 0;
var time;

function currentSlide(n){
    slideIndex = n;
    clearTimeout(time);
    showSlides();
}

// slide show function 
function showSlides(){ 
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activedot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activedot";
    time = setTimeout(showSlides, 2500);
}

// USER login,logout
function Register() {
    var e = document.formDN;
    if (e.style.display == "block") e.style.display = "none";
    var d = document.formDK;
    if (d.style.display == "none") d.style.display = "block";
}

function SignIn(){
    var e = document.formDN;
    if (e.style.display == "none") e.style.display = "block";
    var doc = document.formDK;
    if (doc.style.display == "block") doc.style.display = "none";
}

function dongdangky(){
    var doc = document.formDK;
    if (doc.style.display == "block") doc.style.display = "none";
    var docElement = document.formDN;
    if (docElement.style.display == "block") docElement.style.display = "none";
}

function createAdmin(){
    if (localStorage.getItem('arrtaikhoan') === null){
        var taikhoan = [];
        var arrtaikhoan = { username: 'admin', pass: 'admin', fullname: 'Vương Hải Trân', address: 'TPHCM', phone: '0349262670', datesignup: '02-11-2001', quyen: 'admin', tinhtrang: 'open' };
        taikhoan.push(arrtaikhoan);
        localStorage.setItem('arrtaikhoan', JSON.stringify(taikhoan));
    }
}

document.formDK.addEventListener('submit', isSubmit);
document.formDN.addEventListener('submit', getinfo);
var arrtaikhoan = JSON.parse(localStorage.getItem('arrtaikhoan'));
function isSubmit(e){
    e.preventDefault();
    var fullname = document.getElementById('name');
    let phone = document.formDK.phone;
    let username = document.formDK.username;
    let pass = document.formDK.pass;
    let retype = document.formDK.retype;
    let address = document.formDK.diachi;

    var flag = true;
    if (fullname.value == ""){
        document.getElementById('fullnameerror').style.display = 'inline';
        document.getElementById('fullnameerror').innerHTML = 'Không được để trống';
        flag = false;
    } 
    else{
        document.getElementById('fullnameerror').style.display = 'none';
    }

    if (phone.value == ""){
        document.getElementById('phoneerror').style.display = 'inline';
        document.getElementById('phoneerror').innerHTML = 'Không được để trống';
        flag = false;
    } 
    else{
        if (isNaN(Number(phone.value))){
            document.getElementById('phoneerror').style.display = 'inline';
            document.getElementById('phoneerror').innerHTML = 'SĐT không hợp lệ';
            flag = false;
        } 
        else{
            if (Number(phone.value.length) < 10 || Number(phone.value.length) > 10){
                document.getElementById('phoneerror').style.display = 'inline';
                document.getElementById('phoneerror').innerHTML = 'SĐT không đúng';
                flag = false;
            } 
            else{
                document.getElementById('phoneerror').style.display = 'none';
            }
        }
    }
    if (username.value == ""){
        document.getElementById('usererror').style.display = 'inline';
        document.getElementById('usererror').innerHTML = ' Không được để trống';
        flag = false;
    } 
    else{
        document.getElementById('usererror').style.display = 'none';
    }
    if (pass.value == ""){
        document.getElementById('passerror').style.display = 'inline';
        document.getElementById('passerror').innerHTML = 'Không được để trống';
        flag = false;
    } 
    else{
        if (pass.value.length < 8){
            document.getElementById('passerror').style.display = 'inline';
            document.getElementById('passerror').innerHTML = 'MK phải trên 8 ký tự';
            flag = false;
        } 
        else{
            document.getElementById('passerror').style.display = 'none';
        }
    }
    if (retype.value != pass.value){
        document.getElementById('pass2error').style.display = 'inline';
        document.getElementById('pass2error').innerHTML = 'Nhập lại sai!!';
        flag = false;
    } else{
        document.getElementById('pass2error').style.display = 'none';
    }
    if (address.value == ""){
        document.getElementById('dcerror').style.display = 'inline';
        document.getElementById('dcerror').innerHTML = 'Không được để trống';
        flag = false;
    } else{
        document.getElementById('dcerror').style.display = 'none';
    }
    if (flag == false){
        return false;
    }

    var datE = new Date();
    var datesignup = datE.getDate() + '-' + (datE.getMonth() + 1) + '-' + datE.getFullYear();
    var taikhoan = { username: username.value, pass: pass.value, address: address.value, fullname: fullname.value, phone: phone.value, datesignup: datesignup, quyen: 'user', tinhtrang: 'open' };
    var arrtaikhoan = JSON.parse(localStorage.getItem('arrtaikhoan'));
    for (var pwd in arrtaikhoan){
        if (taikhoan.username == arrtaikhoan[pwd].username){
            document.getElementById('usererror').style.display = 'inline';
            document.getElementById('usererror').innerHTML = ' đã được dùng';
            username.focus();
            return false;
        }
    }
    arrtaikhoan.push(taikhoan);
    localStorage.setItem('arrtaikhoan', JSON.stringify(arrtaikhoan));
    alert('Đăng Ký Thành Công !!');
    SignIn();
}

var arrtaikhoan = JSON.parse(localStorage.getItem('arrtaikhoan'));
function getinfo(e) {
    e.preventDefault();
    var arrtaikhoan = JSON.parse(localStorage.getItem('arrtaikhoan'));
    var username = document.formDN.username
    var pass = document.formDN.pass
    var flag = true;
    if (username.value == "") {
        document.getElementById('loidn1').innerHTML = 'không được để trống';
        flag = false;
    } else {
        document.getElementById('loidn1').style.display = 'none';
    }
    if (pass.value == "") {
        document.getElementById('loidn2').innerHTML = 'không được để trống';
        flag = false;
    } else {
        document.getElementById('loidn2').style.display = 'none';
    }
    if (flag == false) {
        return false;
    }
    for (var pwd in arrtaikhoan) {
        if (username.value == arrtaikhoan[pwd].username) {
            if (pass.value == arrtaikhoan[pwd].pass) {
                dongdangky()
                localStorage.setItem('userlogin', JSON.stringify(arrtaikhoan[pwd]));
                window.location.reload(true);
                return true;
            }

        }

    }
    document.getElementById('loidn2').style.display = 'inline';
    document.getElementById('loidn2').innerHTML = 'Sai Thông Tin';
    return false;
}

function logout(){
    localStorage.removeItem('userlogin');
    localStorage.removeItem('cart');
    window.location.reload();
}

function checklogin(){
    if (localStorage.getItem('userlogin') != null){
        var user = JSON.parse(localStorage.getItem('userlogin'));
        if (user.tinhtrang == 'open'){
            if (user.quyen == 'admin'){
                document.getElementById('giohangs').style.display = 'none';
                document.getElementById('top').style.display = 'none';
                document.getElementById('top1').style.display = 'block';
                document.getElementById('top2').style.display = 'block';
                document.getElementById('quanly').style.display = 'block';
                document.getElementById('top2').innerHTML = user.fullname;
                customAlert('Chào ADMIN', 'success');
            }
            else {
                document.getElementById('top').style.display = 'none';
                document.getElementById('top1').style.display = 'block';
                document.getElementById('top2').style.display = 'block';
                document.getElementById('lichsu').style.display = 'block';
                document.getElementById('top2').innerHTML = user.fullname;
                customAlert('Xin chào ' + user.fullname + '', 'success');
            }
        }
        else { alert('Tài Khoản của bạn hiện đang bị khóa!!'); localStorage.removeItem('userlogin'); }
    }
    else return false;
}

function checklogin2(){
    if (localStorage.getItem('userlogin') != null){
        var user = JSON.parse(localStorage.getItem('userlogin'));
        var s = '';
        if (user.quyen == 'admin'){
            document.getElementById('giohangs').style.display = 'none';
            document.getElementById('top').style.display = 'none';
            document.getElementById('top1').style.display = 'block';
            document.getElementById('top2').style.display = 'block';
            document.getElementById('quanly').style.display = 'block';
            document.getElementById('top2').innerHTML = user.fullname;
        }
        else{
            document.getElementById('top').style.display = 'none';
            document.getElementById('top1').style.display = 'block';
            document.getElementById('top2').style.display = 'block';
            document.getElementById('lichsu').style.display = 'block';
            document.getElementById('top2').innerHTML = user.fullname;
        }
    }
    else return false;
}

function renderlistacc(){
    let arrtaikhoan = localStorage.getItem('arrtaikhoan') ? JSON.parse(localStorage.getItem('arrtaikhoan')) : [];
    if (arrtaikhoan.length === 0) return false;
    let tablecontent = `<tr style="background-color: gray; color : white ;  ">
       <td>STT</td>
       <td> Họ Và Tên</td>
       <td>  Số Điện Thoại</td>
       <td>  Username</td>
       <td>  Ngày ĐK </td>
       <td>  Thao Tác</td>
       </tr>`;
    arrtaikhoan.forEach((taikhoan, index) => {
        let accid = index;
        index++;
        tablecontent += `<tr>
       <td>${index}</td>
       <td>${taikhoan.fullname}</td>
       <td>${taikhoan.phone}</td>
       <td>${taikhoan.username}</td>
       <td>${taikhoan.datesignup}</td>
       <td>
           <a href='#'>edit</a> | <a href='#' onclick='xoaacc(${accid})'>delete</a>
       </td>
       </tr>`;
    })
    document.getElementById('dsacc').innerHTML = tablecontent;
}
function xoaacc(id){
    let arrtaikhoan = localStorage.getItem('arrtaikhoan') ? JSON.parse(localStorage.getItem('arrtaikhoan')) : [];
    arrtaikhoan.splice(id, 1);
    localStorage.setItem('arrtaikhoan', JSON.stringify(arrtaikhoan));
    renderlistacc();
}

function buy(){
    if (localStorage.getItem('userlogin') === null){
        alert('Bạn phải đăng nhập để mua sản phẩm');
        return false;
    }

    var info = '';
    var totalprice = 0;

    var cartArray = JSON.parse(localStorage.getItem('giohang'));
    var sanpham = [];
    console.log(cartArray.length);
    for (var i = 0; i < cartArray.length; i++) {
        sanpham.push(laySPtheoID(cartArray[i].id));
    }
    var tongsoluong = 0;
    for (var i = 0; i < cartArray.length; i++) {
        tongsoluong += cartArray[i].soluong;
    }
    var j = 0;
    console.log(sanpham[1]);
    for (var i = 0; i < cartArray.length; i++) {

        info += cartArray[i].soluong + ' x ' + sanpham[j].ten + ' ; ';
        console.log(sanpham[j]);
        totalprice += cartArray[i].soluong * sanpham[j].gia;
        j++;

    }
    var customer = JSON.parse(localStorage.getItem('userlogin'));

    var date = new Date();
    var daTe = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    if (localStorage.getItem('bill') === null) {
        var billArray = [];
        var bill = { id: taoID(), info: info, sanpham: sanpham, totalprice: totalprice, customer: customer, tongsoluong: tongsoluong, date: daTe, status: 'Chưa xử lý' };
        billArray.unshift(bill);
        localStorage.setItem('bill', JSON.stringify(billArray));
    }
    else {
        var billArray = JSON.parse(localStorage.getItem('bill'));
        var bill = { id: taoID(), info: info, sanpham: sanpham, totalprice: totalprice, customer: customer, tongsoluong: tongsoluong, date: daTe, status: 'Chưa xử lý' };
        billArray.unshift(bill);
        localStorage.setItem('bill', JSON.stringify(billArray));
    }
    localStorage.removeItem('giohang');

    alert('bạn đã đặt hàng thành công');

    window.location.reload();
    hienthighrong();

}

function showbill(){
    if (localStorage.getItem('bill') === null){
        document.getElementById('bill').style.display = 'none';
    }
    else{
        var user = JSON.parse(localStorage.getItem('userlogin'))
        var billArray = JSON.parse(localStorage.getItem('bill'));
        var str_html_display = '<h2>Đơn hàng đã đặt</h2>';
        for (var i = 0; i < billArray.length; i++) {
            if (user.username == billArray[i].customer.username){
                console.log(billArray[i].totalprice);
                document.getElementById('bill').style.display = 'block';
                str_html_display += '<div class="billcontent">' +
                    '<div>' + billArray[i].info + '</div>' +
                    '<div>' + chuyentien(billArray[i].totalprice) + '</div>' +
                    '<div>' + billArray[i].date + '</div>' +
                    '<div>' + billArray[i].status + '</div>' +
                    '</div>';
            }
        }
        document.getElementById('bill').innerHTML = str_html_display;
    }
}

function customAlert(message, type){
    if (type == 'success') {
        document.getElementById("customalert").style.backgroundColor = 'rgba(47, 76, 97, 0.966)';
    }
    if (type == 'warning') {
        document.getElementById("customalert").style.backgroundColor = 'rgba(47, 76, 97, 0.966)';
    }
    document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function () { x.className = x.classList.remove("show"); }, 3500);
}

/* Bật Tắt tìm kiếm */
function closesearch(){
    var khungsearch = document.getElementById('khungsearch').style.display = 'none';
}

function mosearch(){
    var khungsearch = document.getElementById('khungsearch').style.display = 'block';
}

//   Show search nâng cao
function showsearchnangcao(){
    if (document.getElementById('loaisanpham').style.display == "inline-block" && document.getElementById('priceform').style.display == "inline-block" && document.getElementById('priceto').style.display == "inline-block" && document.getElementById('khoangcachsearch').style.display == "inline-block" && document.getElementById('searchnangcao').style.display == "block") {
        document.getElementById('loaisanpham').style.display = "none";
        document.getElementById('priceform').style.display = "none";
        document.getElementById('priceto').style.display = "none";
        document.getElementById('khoangcachsearch').style.display = "none";
        document.getElementById('searchnangcao').style.display = "none";
        document.getElementById('timkiem').style.display = "block";
        document.getElementById('timkiem').value = "";
        document.getElementById('searchresult').innerHTML = "";
        document.getElementById('timkiem').disabled = false;
    }
    else{
        document.getElementById('timkiem').value = "";
        document.getElementById('searchresult').innerHTML = "";
        document.getElementById('timkiem').disabled = false;
        document.getElementById('loaisanpham').value = "all";
        document.getElementById('priceform').value = "";
        document.getElementById('priceto').value = "";
        document.getElementById('loaisanpham').style.display = "inline-block";
        document.getElementById('priceform').style.display = "inline-block";
        document.getElementById('priceto').style.display = "inline-block";
        document.getElementById('khoangcachsearch').style.display = "inline-block";
        document.getElementById('searchnangcao').style.display = "block";
    }
}

function search(index){
    document.getElementById('phantrangsearch').style.display = "block";
    var sanphamsearch = document.getElementById('timkiem').value.toLowerCase();
    var sanphamArray = JSON.parse(localStorage.getItem('sanpham'));
    var str_html_display = '', dem = 0;
    var arr = [];
    for (var i = 0; i < sanphamArray.length; i++){
        if ((sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 || sanphamArray[i].loai.toLowerCase().search(sanphamsearch) != -1) && sanphamsearch != ''){
            arr.push(sanphamArray[i])
        }
    }
    for (var i = index; i < sanphamArray.length; i++){
        if ((sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 || sanphamArray[i].loai.toLowerCase().search(sanphamsearch) != -1) && sanphamsearch != ''){
            str_html_display += '<div class="divsanpham" onclick="hienchitiet(' + sanphamArray[i].id + ');">' +
                '<a href ="#"><img src="' + sanphamArray[i].hinh + '"/> ' +
                '<h4 >' + sanphamArray[i].ten + '</h4>' +
                '<p style="color: red;font- size :15px">Giá: ' + chuyentien(sanphamArray[i].gia) + '</p></a></div>';

            dem++;
            if (dem == 8) break;
        }
    }

    document.getElementById('searchresult').innerHTML = str_html_display;
    console.log(arr.length);
    var sotrang = Math.ceil(arr.length / 8);
    console.log(sotrang);
    if (sotrang > 1){
        console.log(sotrang);
        var t = '';
        var vitri = '';
        for (var i = 1; i <= sotrang; i++){
            vitri = (i - 1) * 8;
            if (index == vitri) {
                t += '<div id="sotrang"  class="active" onclick="search(' + vitri + ');">' + i + '</div>';
            }
            else{
                t += '<div id="sotrang" onclick="search(' + vitri + ');" >' + i + '</div>';
            }

        }
        document.getElementById("phantrangsearch").innerHTML = t;
    }
    else document.getElementById('phantrangsearch').style.display = "none";

}

function timkiemnangcao(index){
    document.getElementById('phantrangsearch').style.display = "none";
    document.getElementById('phantrangsearchnangcao').style.display = "block";
    var s = '';
    var sanphamsearch = document.getElementById('timkiem').value.toLowerCase();
    var sanphamArray = JSON.parse(localStorage.getItem('sanpham'));
    var loaisanpham = document.getElementById('loaisanpham').value;
    console.log(loaisanpham);
    var priceform = document.getElementById('priceform').value;
    console.log(priceform);
    var priceto = document.getElementById('priceto').value;
    console.log(priceto);
    var arr = [];
    if (loaisanpham == 'all'){
        for (var i = 0; i < sanphamArray.length; i++) {
            if (sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 && sanphamArray[i].gia >= priceform && sanphamArray[i].gia <= priceto) {
                arr.push(sanphamArray[i]);
                console.log(arr.length);
            }
        }
    }
    else{
        for (var i = 0; i < sanphamArray.length; i++) {
            if (sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 && sanphamArray[i].loai == loaisanpham && sanphamArray[i].gia >= priceform && sanphamArray[i].gia <= priceto) {
                arr.push(sanphamArray[i]);
                console.log(arr.length);
            }
        }
    }
    console.log(arr.length);
    var dem = 0;
    if (loaisanpham == 'all') {
        for (var i = index; i < sanphamArray.length; i++){
            if (sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 && sanphamArray[i].gia >= priceform && sanphamArray[i].gia <= priceto) {
                s += '<div class="divsanpham" onclick="hienchitiet(' + sanphamArray[i].id + ');">' +
                    '<a href ="#"><img src="' + sanphamArray[i].hinh + '"/> ' +
                    '<h4 >' + sanphamArray[i].ten + '</h4>' +
                    '<p style="color: red;font- size :15px">Giá: ' + chuyentien(sanphamArray[i].gia) + '</p></a></div>';
                dem++;
                if (dem == 8) break;
            }
        }
    }
    else{
        for (var i = index; i < sanphamArray.length; i++) {
            if (sanphamArray[i].ten.toLowerCase().search(sanphamsearch) != -1 && sanphamArray[i].loai == loaisanpham && sanphamArray[i].gia >= priceform && sanphamArray[i].gia <= priceto) {
                s += '<div class="divsanpham" onclick="hienchitiet(' + sanphamArray[i].id + ');">' +
                    '<a href ="#"><img src="' + sanphamArray[i].hinh + '"/> ' +
                    '<h4 >' + sanphamArray[i].ten + '</h4>' +
                    '<p style="color: red;font- size :15px">Giá: ' + chuyentien(sanphamArray[i].gia) + '</p></a></div>';
                dem++;
                if (dem == 8) break;
            }
        }
    }

    document.getElementById('searchresult').innerHTML = s;

    var sotrang = Math.ceil(arr.length / 8);
    console.log(sotrang);
    if (sotrang > 1){
        var t = '';
        var vitri = '';
        for (var i = 1; i <= sotrang; i++){
            vitri = (i - 1) * 8;
            if (index == vitri) {
                t += '<div id="sotrang"  class="active" onclick="timkiemnangcao(' + vitri + ');">' + i + '</div>';
            }
            else {
                t += '<div id="sotrang" onclick="timkiemnangcao(' + vitri + ');" >' + i + '</div>';
            }

        }
        document.getElementById("phantrangsearchnangcao").innerHTML = t;
    }
    else document.getElementById('phantrangsearchnangcao').style.display = "none";
}

function showsanphamInfoSearch(idsp){
    document.getElementById("nenCT").style.display = "block";
    var arrSP = JSON.parse(localStorage.getItem("sanpham"));
    var str_html_display = '';
    for (var i = 0; i < arrSP.length; i++){
        if (arrSP[i].id == idsp) {
            console.log(arrSP[14]);
            document.getElementById("imgct").src = arrSP[i].hinh;
            document.getElementById("ten").innerHTML = arrSP[i].ten;
            document.getElementById("gia").innerHTML = 'Giá: ' + chuyentien(arrSP[i].gia);

        }
    }
    console.log(idsp);
    str_html_display += '<button id="btnGH" onclick="themvaoGH(' + idsp + ');">Thêm vào giỏ hàng</button>';
    document.getElementById('hiennutadd').innerHTML = str_html_display;
}