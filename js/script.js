var slideIndex = 0;
            showSlides();

            function showSlides() {
                var i;
                var slides = document.getElementsByClassName("slider");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1
                }
                slides[slideIndex - 1].style.display = "block";
                setTimeout(showSlides, 3000);
            }

            // kode untuk melakukan spin
            function spin() {
                document.getElementsByTagName("audio")[0].play();
                setTimeout(function() {
                    var imgs = ['./img/rewards/1.png', './img/rewards/2.png', './img/rewards/3.png', './img/rewards/4.png', './img/rewards/5.png','./img/rewards/6.png'];
                    var randm = Math.floor(Math.random() * imgs.length);
                    document.getElementById("imgR").src = imgs[randm];
                        $('.reward_confirmation').show();                    
                }, 3900);

                var $myElm = $(".spin");

                function rotate(degrees) {
                    $myElm.css({
                        '-webkit-transform': 'rotate(' + degrees + 'deg)',
                        '-moz-transform': 'rotate(' + degrees + 'deg)',
                        '-ms-transform': 'rotate(' + degrees + 'deg)',
                        'transform': 'rotate(' + degrees + 'deg)'
                    });
                }
                $({
                    deg: 0
                }).animate({
                    deg: 360 * 40
                }, {
                    duration: 3900,
                    step: function() {
                        const lord = Math.random() * (360 - 1) + 1;
                        var deg = this.deg;
                        rotate(lord * 4);
                    }
                });
            }
            

            function klik1() {
                var audio = document.getElementById('klik1');
                audio.play();
            }
            $(document).ready(function() {
                $("o").attr("onclick", "klik1()");
            });

            function open_about_event(){
                $('#aboutE').show();
            }
            function close_about_event(){
                $('#aboutE').hide();
            }

            function open_event_rules(){
                $('#eventRules').show();
            }

            function close_event_rules(){
                $('#eventRules').hide();
            }

            function account_login(){
                $('#login_account').show();
            }

            $('#rewardConfirmation').on('click', function() {
                $('#rewardConfirmationBox').hide();
            });

            function open_facebook(){
                $('#boxFB').show();
            }
            function tutup_facebook(){
                $('#boxFB').hide();
            }

            function open_twitter(){
                $('#boxTw').show();
            }

            function tutup_twitter(){
                $('#boxTw').hide();
            }

            var opn = new Audio();
            opn.src = "/media/open_reward_tab.mp3";

            var cls = new Audio();
            cls.src = "/media/close_reward_popup.mp3";