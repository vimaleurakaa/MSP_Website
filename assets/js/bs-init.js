//Page loader
$(window).on("load", function () {
  $("#covers").fadeOut(600);
});

//Footer
$(document).ready(function () {
  document.getElementById("footer_en").innerHTML += `
<div class="footer-dark" style="margin-top: 0;">
<footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-3 item">
                <h3>Additional Resources</h3>
                <ul>
                    <li><a href="ignite-service.html">Ignite Services</a></li>
                    <li><a href="prayer-slot.html">Prayer Points</a></li>
                    <li><a href="prayer-request-user.html">Prayer Request</a></li>
                </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
                <h3></h3>
                <ul>
                    <li><a href="#">Download KPC APP</a>
                        <div><a href="https://play.google.com/store/apps/details?id=com.mystreetprayer.app"
                                target="_blank"><img src="assets/img/GooglePlay.png"
                                    style="width: 160px;padding-top: 20px;padding-bottom: 20px;padding-right: 0;"></a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 item text">
                <h3>My Street Prayer</h3>
                <p style="font-size: 14px;">My StreetPrayer Website is managed by 'Faith Ministries
                    Christian Worship Center (FMCWC) is a non - denominational church that has the goal to
                    proclaim Jesus to the whole world.'<br></p>
            </div>
            <div class="col item social">
                 <a href="https://www.facebook.com/faithmincwc/" target="_blank"><i class="icon ion-social-facebook"></i></a><a
                    href="https://www.youtube.com/channel/UCHCM4EnbbBdsvd8XeDohOlQ" target="_blank"><i class="icon icon ion-social-youtube"></i></a><a
                    href="https://www.instagram.com/fmcwc/" target="_blank"><i class="icon ion-social-instagram"></i></a></div>
        </div>
        <p class="copyright">MyStreetPrayer © 2020-21</p>
    </div>
</footer>
</div>`;
});
