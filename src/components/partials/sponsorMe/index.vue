<template>
    <div class="sponsor-me np">
        <div class="addtional-info layered-bg">
            <div class="content">
                <h3>Stay Tuned</h3>
                <p>Cooking up something exciting. 💎</p>
            </div>
        </div>
        <div class="paypal-me">
            <div class="content">
                <h3>Buy me a Cup of Coffee</h3>
                <p>Help a brotha out by buying a cup of coffee. Cheers! 🙏</p>
                <a href="https://www.paypal.me/brianmonsales/100" class="btn paypal" target="_blank">
                    <i class="fa fa-paypal"></i>
                    Send some love
                </a>
            </div>
        </div>
        <div class="contact-con layered-bg">
            <div class="content">
                <h3>Contact Me</h3>
                <p>Do you want a stunning website for your existing business? 
                <a href="mailto:brianmonsales@gmail.com" target="_top">Email me! </a> 🔥</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.sponsor-me {
    .contact-con, .addtional-info, .paypal-me {
        &.layered-bg {
            &:before {
                background: linear-gradient(to bottom right, #8e84d8, #5f45a3);
            }
            &:after {
                background: url('@/assets/me_avatar.jpg') no-repeat center;
                background-position: 65% 20%;
            }
        }
        .content {
            color: #fff;
            padding: 20px;
            > h3 {
                font-family: 'CircularStdBold';
            }
            a {
                color: #fff;
            }
        }
    }
    .paypal-me {
        background: linear-gradient(to bottom right, #ffffff, #aae2ff);
        .content {
            color: #3e3f43;
        }
        p {
            margin: 0;
            padding: 10px 0;
        }
        .btn {
            margin: 10px 0;
            text-transform: uppercase;
        }
    }
    .addtional-info {
        &.layered-bg {
            &:before {
                background: linear-gradient(to bottom right, #cf2ed2, #8e1e61);
            }
            &:after {
                background: url('@/assets/bg_codes2.jpeg') no-repeat center;
            }
        }
    }
}
</style>
