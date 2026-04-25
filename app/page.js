!DOCTYPE html
html lang=zh-CN
head
    meta charset=UTF-8
    meta name=viewport content=width=device-width, initial-scale=1.0
    title幸福日子食品有限公司  吃采蘑菇，享美好童年title
    style
         --- 基础重置与字体 --- 
        root {
            --primary-color #1a1a1a;
            --accent-color #d4af37;  优雅的香槟金作为点缀 
            --bg-color #ffffff;
            --gray-light #f4f4f4;
            --font-serif Noto Serif SC, Songti SC, serif;
            --font-sans Helvetica Neue, Helvetica, Arial, sans-serif;
        }

         { margin 0; padding 0; box-sizing border-box; }
        
        body {
            background-color var(--bg-color);
            color var(--primary-color);
            font-family var(--font-sans);
            line-height 1.6;
            -webkit-font-smoothing antialiased;
        }

        h1, h2, h3 { font-family var(--font-serif); font-weight 400; }
        a { text-decoration none; color inherit; transition 0.3s; }
        ul { list-style none; }

         --- 导航栏 --- 
        header {
            position fixed;
            top 0;
            width 100%;
            padding 20px 5%;
            display flex;
            justify-content space-between;
            align-items center;
            background rgba(255, 255, 255, 0.95);
            backdrop-filter blur(5px);
            z-index 1000;
            border-bottom 1px solid rgba(0,0,0,0.05);
        }

        .logo {
            font-family var(--font-serif);
            font-size 1.5rem;
            letter-spacing 2px;
            font-weight bold;
        }

        nav ul { display flex; gap 40px; }
        nav a {
            font-size 0.9rem;
            text-transform uppercase;
            letter-spacing 1px;
            position relative;
        }
        nav aafter {
            content '';
            position absolute;
            width 0;
            height 1px;
            bottom -5px;
            left 0;
            background-color var(--primary-color);
            transition width 0.3s;
        }
        nav ahoverafter { width 100%; }

         --- 主视觉 Hero --- 
        .hero {
            height 100vh;
            display flex;
            flex-direction column;
            justify-content center;
            align-items center;
            text-align center;
            padding 0 20px;
             模拟背景图，实际部署时请替换为真实图片 
            background linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.4)), url('httpsimages.unsplash.comphoto-1606318801924-922918473783auto=format&fit=crop&q=80&w=2000');
            background-size cover;
            background-position center;
        }

        .hero h1 {
            font-size 3.5rem;
            margin-bottom 15px;
            letter-spacing 5px;
        }

        .hero p {
            font-size 1.2rem;
            margin-bottom 40px;
            color #555;
            font-family var(--font-serif);
            font-style italic;
        }

        .btn-group { display flex; gap 20px; }
        .btn {
            padding 15px 35px;
            border 1px solid var(--primary-color);
            font-size 0.9rem;
            text-transform uppercase;
            letter-spacing 1px;
            cursor pointer;
            transition all 0.3s ease;
        }
        .btn-primary {
            background-color var(--primary-color);
            color #fff;
        }
        .btn-primaryhover {
            background-color transparent;
            color var(--primary-color);
        }
        .btn-outline {
            background-color transparent;
            color var(--primary-color);
        }
        .btn-outlinehover {
            background-color var(--primary-color);
            color #fff;
        }

         --- 产品中心 --- 
        .section { padding 100px 10%; text-align center; }
        .section-title {
            font-size 2rem;
            margin-bottom 60px;
            position relative;
            display inline-block;
        }
        .section-titleafter {
            content '';
            display block;
            width 50px;
            height 1px;
            background var(--primary-color);
            margin 20px auto 0;
        }

        .products-grid {
            display grid;
            grid-temp
