<template>
  <div>
    <div class="landing">
      <div class="landing-text" id="landing">
        <h1>Bersama Lini Academy</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In maiores
          ducimus perferendis, repudiandae non enim voluptates sit
          exercitationem fugiat aut pariatur, libero asperiores autem molestiae
          omnis quidem unde. Suscipit, accusantium!
        </h3>
        <div class="btn">
          <a href="#" class="">Lihat Lebih Lanjut</a>
        </div>
      </div>
      <div class="landing-image">
        <img src="../assets/innovation_.svg" alt="" class="illustration" />
      </div>
    </div>
    <div class="about" id="about">
      <div class="about-text">
        <h1>Apa itu Lini Academy?</h1>
        <img
          src="../assets/idea_applications.svg"
          alt=""
          class="illustration"
        />
      </div>
      <div class="about-list">
        <ol>
          <li>
            <span> 01 </span>
            <p>
              Fitur yang dapat memudahkan kamu dalam Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Accusantium eius velit
              exercitationem voluptas nisi magnam modi, incidunt facilis. Vel
              officiis velit corporis? Autem magni quas nobis aut! Aliquid,
              illum praesentium.
            </p>
          </li>
          <li>
            <span> 02 </span>
            <p>
              Fitur yang dapat memudahkan kamu dalam Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Accusantium eius velit
              exercitationem voluptas nisi magnam modi, incidunt facilis. Vel
              officiis velit corporis? Autem magni quas nobis aut! Aliquid,
              illum praesentium.
            </p>
          </li>
          <li>
            <span> 03 </span>
            <p>
              Fitur yang dapat memudahkan kamu dalam Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Accusantium eius velit
              exercitationem voluptas nisi magnam modi, incidunt facilis. Vel
              officiis velit corporis? Autem magni quas nobis aut! Aliquid,
              illum praesentium.
            </p>
          </li>
          <li>
            <span> 04 </span>
            <p>
              Fitur yang dapat memudahkan kamu dalam Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Accusantium eius velit
              exercitationem voluptas nisi magnam modi, incidunt facilis. Vel
              officiis velit corporis? Autem magni quas nobis aut! Aliquid,
              illum praesentium.
            </p>
          </li>
        </ol>
      </div>
    </div>
    <div class="info-section" id="info">
      <div class="info-header">
        <h1>Tentang Kami</h1>
        <div class="ps">
          <div class="card">
            <div class="circle-photo">
              <img
                src="data:image/png;base64,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"
                alt=""
                class="t"
                width="180"
                height="180px"
              />
            </div>
            <div class="paragarph-center">
              <h1 class="title">name</h1>
              <p class="positon">Position</p>
              <h5>"Anything"</h5>
            </div>
          </div>
          <div class="card">
            <div class="circle-photo">
              <img
                src="data:image/png;base64,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"
                alt=""
                class="t"
                width="180"
                height="180px"
              />
            </div>
            <div class="paragarph-center">
              <h1 class="title">name</h1>
              <p class="positon">Position</p>
              <h5>"Anything"</h5>
            </div>
          </div>
          <div class="card">
            <div class="circle-photo">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAw1BMVEVsSDu+dFkAAABPMCrjybtvSj3BdlprRzrFeFxRMStoRTljQjZNLinnzb9nRDhaPDEqHBcYEA25cVdWNi5WOS9HLycfFRESDAqaXkhgPjRLMimgYksyIRtYOzBAKyOva1J+TTuTWkVmQDKIU0BTMyclGRRAJx7XvK5lWlNvRDQ5IxtSSUSMbF+CYVQxHhe2mYzApJfMsaN4VkmQgHemk4mae281LyxbNypILCFBJyNNRD92aWIfGxqaiH+2mo1DPDeFdm2SDFpzAAARG0lEQVR4nO2df1viuBPAsWwotJSC/KhFFrSKrJzr6t3tqbd3u/f+X9W3M+lPmrRJk1L8Ps4f+6wV235IMplMJjOds/9T6bT9Ak3JB9h7kw+w9yYfYO9NPsDem3yAvTf5AHtv8gH23uQD7L3JB9h7kw+w9yYfYGzp9Xr9fvhPT8/b4C37sSjdVQWs1z+/vL65v7+6ubg862th6/U31/evdygvN5f9fu071QYLqa72nhGLd3d1rszW69/sjaxs78/rotUE6/Uvb41Dub1U6jy9s5vCLQ3j/rzePeuB9TcvSVNNJmm73W7q953+5WN0x/FqPV+vVwv64+S61j1rgfWvKcti7dpWKCN7to5e46YuWf+KUq1ti1DpjJb0pvd17lkHrB/g81Y2PJ1K+D97Vf8t4nt6s+SO9K7uBC6/1OiNNcB6OLrGdvYV8DXsMfwiqEPWQ651p3BPsq5JJg9G32F++Ar4GsuavbF/D384Y95zVq8fSIPRsfA5fYds56FvcSn7/fYv4M/cpF+bvjud+r6JF4gLv5TWILJgvU3uHWx3Ogjfwcq12fi8zj2T9hpNu5FMrZRM8p7yYI+Zd/C7Q/oGw6kfk62ZHaeXl4Nf3mb79nQ4jMGGXbwtmcMwk2wySbAezKEr+g5m8s3itzuKXgz02KYX46DRd77ZXIZygRL+Z7M5o7Ygfqx3DTZGxJW/abeLfYOM5Tu4LBg0mBl9tbk3GHbtTtJx9n1E2oSW5O1+u0hn8GRW3z6+3t9cb5B7G16hf9yxBnmu7hB/4ctrRjmw3kXaadwu8x06BOaz683Vy4JhIBVk+3IFGnEdNdhgeHjXbnLPTYNg/dCS8qimsApv0B3S3jgSATqQDqsTUMFhBt3gSqrJ5MDOt8kI8xnvMDCTsZ50uu1qvZ4vZ65rJ+LOlvP1ajxJPxV1Aptxz+4U7xn25lcp9SEFhnqZqkRyOBjSl+iYOKa81Xw2QmOLEJKfeuNL9my+gs960ahl3rNrxcq2QbCbZJhbxcGQdEbibvczs4DDEPyMu4wUKqsThAK/xZl/I9MXpcDQ8inpNeF8lrxwFVMWr1PWYHSQwcC9aQ4sCJdH/CHWHQ4HpgTQofiDIasf0ElaVnvIgd0mMykTLJmk68qIpRZdBPMkLWE5sLvQEOSCTUcy/Y8txCqiUbCJ5IJIE9hQvbViNPPwO6NdcSFpLurpisOpVfq2cmL5RwdLlccoO8x1dMKcmNPM7ekU0uwYS9V9J33wwC97x5qSGWvUnGlUK2Ym6NisC5dMKhq+ROxoWousmUbnsYxJFQ2y4bQhLPqIYTzE0AqWWpFJGsGh0t1TMGpT+ZoHV16wP1L3ALgcpF5VctkSqsVJ9NRp7JNoUvzISIMF2aTBZQsOMjf6OrtNKI1DGdHpEZSinNdDEgwG2Sp2TxyBKxa74YUm9kWj8Q5YEFy7Sq1apJ05LwbHC9wsGLip5Hzncuqeuu2XxwdD3/mtzPabDFjvHHew1kfnisn2EpuAEmC9DfoyPrfAFfu5H8XJxMH6l+h3KeweHYvMhsdvhcmEwXqX6N80W+IKyUZSZKJgdEdk3BoWiDmR6I2CYLS9Vq1yhcYOeM3vxN5YDKy3gVuu2sUCMmizW6H5TAisB67tE+AKyQzRmVoMDOavbdtQIASMRuNKgEwEDO2NSfVTjyHksyG25BQAw+10T5N3TVnQBvGqd6SrwXAn1WhrXi4KgTiy6i2lSrDeuWFwQjBaEnAxVg+zarB9S3YvX1CBVK3OqsDQlbg9KS66WbZXA0OLwzumE0BEcK+9ojNWtdhjawuVMsHN4HLNWA6GHXF/cly0M5abVqVgaNJ7bVOwBJ0gF2XDrBQM9sPSgLCTErtKf5SB4dTc9lKFIxgfcV1CVtpij+nmyskJ2PmP9cDQn31aU3NG0Ida0mRlLbY4wSksI9BkfMXIB8MGO75vVFhwlPHXL3yw/iTdlz1JsUrnMi4YqsQTbrCqIEYuGM5hJzzCOlEQI6/JeGBodJysSoxkUTJJ88DwSMapzmGRlO6a8cDA4dac31cu7I8rYFfxolo4YBjVrMMfQCx7dEhBRrP5UocThZT0RQ4Y9kR11UHcsWd427wdTc/hGGP1HV/si5xlGa8rejrMX7pdd6CFyCqOg1Yn8/nxOmww9Ago90S6WWfkvVwJrJZvju/wZoOhj1T1qdRPRmWRXt0mF9W1LrT+QgpsH/6B8vdpGwwGK3NR2ZlSMsg4XVHL7OxmGNz4YvYchbratbkeAiYYDjF13xS7xTwGbW2BaD92xA4bDFYsGrRx5vx3enRulV5UfgJaVewYKyYYzGIalpgZBZgJ5kn7ogYDAL6mvQTYnR57KmmdrGJPJgEdkUsw2W9ZCBywR03eKTLH2JA1/N80RyMTugGx1gtvsdLi1oNO4THXZEyw84WuJQsx/ZlrkY4ZBOTrw8NXEgQmHGYxCyeeawo3pJYFhmsxbYvn8D6j4Ou3nYOy+/Y10Lk56kuBXWpRxbGYwcOz43yKxHGeHwJ9K3PuRMYF07bIHJEn2lgOUKE8EW2NJgd2oREs+LpzPjnPP379hfLrx3P44+5roOn2MN8z3aY8MF1RAsFD2FLOnxkbxPgZXnAeNJHJgV1rWSyBBA84rn7Lgn3B8aaJDALHpMAmWsa3+fsOKJwvWbAfeGn3u54ntAMWPGPrOP9mwf6k1561NFk7YMH3WMv/k3L9Fev97zrIpMF0jDGzk0xefx42GIiOIwmtKI/gWzotf8mNMHrtm4Ymg0hhqXlMg7o3yadUnL8p129O5iJRb7I2Juh0hKVt9iN3ScMos6VsRU1gz1kKnMz+zl/RoBjlrHsttqL5+6ecQJPlOmIoynMZPwdBc9b96LtTBeZ8Vx3JsIJeMP1vza3HMjqRC/ZTtS+C84G9w97cCvpgiDHBlAcZhB6xo00b83mY5q56jO1MxUFmcs99s8Fe1aPRU7OjBEzZ+ABfHjuKhQ12r256mB2nCPbr8JriFI1KkR3rwfYEX6vre5Mctg4Ywv85esH4qXTYYBrU4iFYtHT56WgFC7XcndQ2kqGsFgtdMVq55HSlozrGDG6kBwcs1B6eIpiZbzBYuPyWWY5RUdOKJUOMtz8GO5qq2iOn7h1oMDSEv2SabKdhiDEBuGAaBlnwlCHABvvX+fRXToE4T2oTNOxT3cqFQ/QWyvstOZPKCYn+ARdObg2tutQE056X5KMszkOtL44eUjDnZ3i7P8AV/ARkyeUHJSMYeyIv/K25yByTpIMM1s8e/uj8kQHbqWl7cORwjyU1GEuVDjJsp2hoOX/8iq8rDjE8I8dNN9Ng9FvaF9ETHLefk+y8qPbEVdkJOW684qXyZqoZRCzO86G3I+qJattJ4O7gJy/hR5g+Km/rx94cHFe7ApeiL6dusDOGRCjGerzsqDd75x1av3j1RenmEOLBDhgoBzs7M5RPxMWjzNk9FzuiDl1fcmynJDxdXX2kkzSDS3FyhpisslM7JQcKwKxS1PimyWiqSKEo2r8Kh3Ygd67qIatwlmaSOYpzM6rEu5rHrLDJlF0fTDJlLrWDcTjKVP2LZuepqBCfFBeYqkcZzyFgSNULbQbf87rD+fRdNdADVL3K4dN+Jle6ggQdjMtBKIjN6ejw/6odF4YQWg3Rd2bQefj2vAvl+dtDRzkuB8MF1Q5402O1GnZUzVEQmISYQTDSs9mneiQfw7k1nT81TVWHdiQw8isrclSdXO/d6dh50Smo6avz5lSCYdqm08nmQU2ORRWWQNoL1IyncwaVxhkLZCSszsCCltVJZALqxIVhRIq4iCQD2utTIIpCA6VFkhyJgNEsfadwrJEmthNLICmUvgkVyPHzYLK5BMucCCXcorWL2lb6lOtVa7Y+VI0tk1EuwZR2wtn6aA2rNskoV1k+iFpgEVl744zqw9I1cz2wiKwt3Ujn5VdhLKkcpkjWTi5CWryHtxWmCBZpkEUbWUzxVFNzCZD7mO/z6NmBqNoQszfqgZ31N9vjq5DoeJ1skT/J7OnndzjQjtcdCe2GW+mSqrJJxmmxSe9Y3ZG42A1vz6QLaUqCgQrBRxVreTaBZdK0BHVqjkqDRYajMWm+0cgsOpY7kUt1XxOs90qf1vRIiyrEGmMJy1cFDOfpLc0isGyuPxKLlrye2Oi8kdT1NcBoJkmrQzv/ZKYnlUoBy4zqBMLMgmfdpcvESoNtqW+YuDTLw9bVj0Y6Szq4VlhzCf0c24bBcAOGZpKkfhX9aKQzj8pox+oJXfWy9YUlJ2jQiHGO56hWc/gGM21jjZBRdNNcL4ekZqW7YapgZ+OcrZi+xbyQ8acWVseNDvFPcnoJF2NjuTeVL9OVW5KR0T5W/p8V0Qix51HNUO/toAtwahbrAmOmNCXTqLi94a3d2vmmCLGWcSKayVu3+AEYdo3V0eSkNJ0O95OE7bMlzUaI6a+T9Drbt8GgGACCnZET1qwMxktpag4G3bc0xc947lqCLQeFTy13Pk4Smkz2w8FgyAouoTWLGypIA5qD9VAo4jzo7tOcRt5ivXQZNWpzROGYmi1XmVrR3mreHcQ1/QpiS+oPSZ8HZ42JdfHCdsuVgPbG6/nMp7t9mVK84QV3Nl+PvexnjckqbKtBl8tF3R4SlpU42LlRUqYgKhAZsmWrIScNuB2PV6vVeLxdTArVvMO7jt9iqm5JaT24sXhJeXH3G6h6/j57UvoyHCNvq2Ixco542xVA5WtmcpoMLB1xlS8Mhg1WohKspPTlIITrhnSMtss1U4gE30M3xWKowyyZVJMJe4IDo8I/Rex82eMByPDt7W2/CrsglbBLPu73b9jzckhVzYUPgBhg4cW0KBjGVVXpcHal6sGhsD40FKiESGBOES0pL7opASOsOt7Ucplo1TIUqeGLTSY6ygTBIKpKKNzU4tQXLxfBupXQZAKVTSTA8BCPaOiRz6pWXSID3xK8MypGweKMgmDbcpV4IBawMavNH3TA7nDgykQGg2IUXEuL1UaC9aXcrp8Zsg3L6UJ94UvGO6O7W2zFKbYHDR43uVcAsWx/OojYhpFESN2pNBQVQ6TKjjAYTM41Az2IORr5vj9NxPV9e2TV9SWgkS+kPoTCIUB1FGbPZhxvVc/wRdWHCBicBlkUnrlcNx5gZa6LA3tRmr5fCox5fgeGcdOVhWDaOiTD1YuI91Sk/hhYHYcLTHCvKJ67rQbzGLv5Zfm3JcEgSKzQOK2BQTPuBV66Ggx9U4WVM5Q3k5iy64FNWGCCFZQFwK4YPZHmVG4abMGaZQRrXguA3bI6XXtgZYef5cAMVkAO7FodQysywMArrAGMk0gdwJquXEuYJ3vLEgzIgHESqbMfqhmM8+UJDbJqsDvmYGL3f/1gjO5eksRDCow5xFAVNw7GVlAlaVckwHi1CphzzJHAhAZZJRjsRDBWTkyrQDcYxwjgpzaSAMOERwwz/ihgHLONn4xKBuyVrZkIy846Ehg/fZgEGJSCZtWbPAoYmIWsZ+8Fop6rwOCUBMuN0yoYNxe8OBg3I2GbYPxskRJgvOSYRNohpxGMX/tDHOyKk6e1VbCRV21UVYEFnPVkq2BgHQSKh09vOauTo4AteWDb6lOaVS3GmcbQxG4PbFwdm1ml7jnTGB6Kbw8MJrKKF68Ag2ymTK1uSewr6Qeb83LNioPxGmZ0LDDuL9TANrz3t48FxvKj07THyi3WHtisDEy9xZh76jbH1NIOxrQOlFuMn7zabRMMn17hDT5psM8cQ1XECq4Au2Bt+cW3roikURY+mF9tBQuAcb+zxkvZch8iYN7XBMPufxQwZn9vGExnuS2m+M2CsYZSyy2mPsa4ngEA01M+qUS4k6WAVvwfHBhoWxmXKrYAAAAASUVORK5CYII="
                alt=""
                class="t"
                width="180"
                height="180px"
              />
            </div>
            <div class="paragarph-center">
              <h1 class="title">name</h1>
              <p class="positon">Position</p>
              <h5>"Anything"</h5>
            </div>
          </div>
          <div class="card">
            <div class="circle-photo">
              <img
                src="data:image/png;base64,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"
                alt=""
                class="t"
                width="180"
                height="180px"
              />
            </div>
            <div class="paragarph-center">
              <h1 class="title">name</h1>
              <p class="positon">Position</p>
              <h5>"Anything"</h5>
            </div>
          </div>
          <div class="card">
            <div class="circle-photo">
              <img
                src="data:image/png;base64,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"
                alt=""
                class="t"
                width="180"
                height="180px"
              />
            </div>
            <div class="paragarph-center">
              <h1 class="title">name</h1>
              <p class="positon">Position</p>
              <h5>"Anything"</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2 style="color: white">Lini Academy</h2>
      <div class="footer-link">
        <a href="#" class="minilink">Beranda</a>
        <a href="#">Layanan</a>
        <a href="#">Tentang</a>
        <a href="#">Pembicara</a>
        <a href="#">Login</a>
      </div>
    </div>
  </div>
  <!-- <div class="home">

      <div class="site-blocks-cover" style="overflow: hidden;">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div
              class="col-md-12"
              style="position: relative;"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="images/undraw_investing_7u74.svg"
                alt="Image"
                class="img-fluid img-absolute"
              />

              <div class="row mb-4" data-aos="fade-up" data-aos-delay="200">
                <div class="col-lg-6 mr-auto">
                  <h1>Make Your Business More Profitable</h1>
                  <p
                    class="mb-5"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                  <div>
                    <a href="#" class="btn btn-primary mr-2 mb-2">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section" id="features-section">
        <div class="container">
          <div class="row mb-5 justify-content-center text-center" data-aos="fade-up">
            <div class="col-7 text-center mb-5">
              <h2 class="section-title">Imagine Features</h2>
              <p
                class="lead"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
            </div>
          </div>
          <div class="row align-items-stretch">
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div class="unit-4 d-block">
                <div class="unit-4-icon mb-3">
                  <span class="icon-wrap">
                    <span class="text-primary icon-autorenew"></span>
                  </span>
                </div>
                <div>
                  <h3>Marketing Consulting</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p>
                    <a href="#">Learn More</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="unit-4 d-block">
                <div class="unit-4-icon mb-3">
                  <span class="icon-wrap">
                    <span class="text-primary icon-store_mall_directory"></span>
                  </span>
                </div>
                <div>
                  <h3>Market Analysis</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p>
                    <a href="#">Learn More</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="unit-4 d-block">
                <div class="unit-4-icon mb-3">
                  <span class="icon-wrap">
                    <span class="text-primary icon-shopping_basket"></span>
                  </span>
                </div>
                <div>
                  <h3>Easy Purchase</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p>
                    <a href="#">Learn More</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
              <div class="unit-4 d-block">
                <div class="unit-4-icon mb-3">
                  <span class="icon-wrap">
                    <span class="text-primary icon-settings_backup_restore"></span>
                  </span>
                </div>
                <div>
                  <h3>Free Updates</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p>
                    <a href="#">Learn More</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="unit-4 d-block">
                <div class="unit-4-icon mb-3">
                  <span class="icon-wrap">
                    <span class="text-primary icon-sentiment_satisfied"></span>
                  </span>
                </div>
                <div>
                  <h3>100% Satistified</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p>
                    <a href="#">Learn More</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="unit-4 d-block">
                <div class="unit-4-icon mb-3">
                  <span class="icon-wrap">
                    <span class="text-primary icon-power"></span>
                  </span>
                </div>
                <div>
                  <h3>Easy Plugin</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                  <p>
                    <a href="#">Learn More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-big">
        <div class="container">
          <div class="row mb-5 site-section">
            <div class="col-lg-7" data-aos="fade-right">
              <img src="images/undraw_gift_card_6ekc.svg" alt="Image" class="img-fluid" />
            </div>
            <div class="col-lg-5 pl-lg-5 ml-auto mt-md-5">
              <h2 class="text-black">Communicate and gather feedback</h2>
              <p
                class="mb-4"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>

              <div class="author-box" data-aos="fade-left">
                <div class="d-flex mb-4">
                  <div class="mr-3">
                    <img src="images/person_4.jpg" alt="Image" class="img-fluid rounded-circle" />
                  </div>
                  <div class="mr-auto text-black">
                    <strong class="font-weight-bold mb-0">Grey Simpson</strong>
                    <br />Co-Founder, XYZ Inc.
                  </div>
                </div>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
              </div>
            </div>
          </div>

          <div class="mt-5 row mb-5 site-section">
            <div class="col-lg-7 order-1 order-lg-2" data-aos="fade-left">
              <img src="images/undraw_metrics_gtu7.svg" alt="Image" class="img-fluid" />
            </div>
            <div class="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
              <h2 class="text-black">Communicate and gather feedback</h2>
              <p
                class="mb-4"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>

              <div class="author-box" data-aos="fade-right">
                <div class="d-flex mb-4">
                  <div class="mr-3">
                    <img src="images/person_1.jpg" alt="Image" class="img-fluid rounded-circle" />
                  </div>
                  <div class="mr-auto text-black">
                    <strong class="font-weight-bold mb-0">Kimberly Gush</strong>
                    <br />Co-Founder, XYZ Inc.
                  </div>
                </div>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
              </div>
            </div>
          </div>

          <div class="row mb-5 site-section">
            <div class="col-lg-7" data-aos="fade-right">
              <img src="images/undraw_gift_card_6ekc.svg" alt="Image" class="img-fluid" />
            </div>
            <div class="col-lg-5 pl-lg-5 ml-auto mt-md-5">
              <h2 class="text-black">Communicate and gather feedback</h2>
              <p
                class="mb-4"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>

              <div class="author-box" data-aos="fade-left">
                <div class="d-flex mb-4">
                  <div class="mr-3">
                    <img src="images/person_4.jpg" alt="Image" class="img-fluid rounded-circle" />
                  </div>
                  <div class="mr-auto text-black">
                    <strong class="font-weight-bold mb-0">Grey Simpson</strong>
                    <br />Co-Founder, XYZ Inc.
                  </div>
                </div>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
              </div>
            </div>
          </div>

          <div class="mt-5 row mb-5 site-section">
            <div class="col-lg-7 order-1 order-lg-2" data-aos="fade-left">
              <img src="images/undraw_metrics_gtu7.svg" alt="Image" class="img-fluid" />
            </div>
            <div class="col-lg-5 pr-lg-5 mr-auto mt-5 order-2 order-lg-1">
              <h2 class="text-black">Communicate and gather feedback</h2>
              <p
                class="mb-4"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam</p>

              <div class="author-box" data-aos="fade-right">
                <div class="d-flex mb-4">
                  <div class="mr-3">
                    <img src="images/person_1.jpg" alt="Image" class="img-fluid rounded-circle" />
                  </div>
                  <div class="mr-auto text-black">
                    <strong class="font-weight-bold mb-0">Kimberly Gush</strong>
                    <br />Co-Founder, XYZ Inc.
                  </div>
                </div>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?&rdquo;</blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section bg-light" id="about-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12 text-center">
              <h2 class="section-title mb-3">About Us</h2>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-lg-6" data-aos="fade-right">
              <img src="images/undraw_bookmarks_r6up.svg" alt="Image" class="img-fluid" />
            </div>
            <div class="col-lg-5 ml-auto pl-lg-5">
              <h2 class="text-black mb-4 h3 font-weight-bold">Our Mission</h2>
              <p
                class="mb-4"
              >Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
              <ul class="ul-check mb-5 list-unstyled success">
                <li>Laborum enim quasi at modi</li>
                <li>Ad at tempore</li>
                <li>Labore quaerat esse</li>
              </ul>
              <p>
                <a href="#" class="btn btn-primary">Learn More</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section" id="our-team-section">
        <div class="container">
          <div class="row mb-5 justify-content-center text-center" data-aos="fade-up">
            <div class="col-7 text-center mb-5">
              <h2 class="section-title">Our Team</h2>
              <p
                class="lead"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div class="person">
                <div class="bio-img">
                  <figure>
                    <img src="images/person_1.jpg" alt="Image" class="img-fluid" />
                  </figure>
                  <div class="social">
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                    <a href="#">
                      <span class="icon-instagram"></span>
                    </a>
                  </div>
                </div>
                <h2 class="text-black h1">Cloe Marena</h2>
                <span class="sub-title d-block mb-3">President</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div class="person">
                <div class="bio-img">
                  <figure>
                    <img src="images/person_2.jpg" alt="Image" class="img-fluid" />
                  </figure>
                  <div class="social">
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                    <a href="#">
                      <span class="icon-instagram"></span>
                    </a>
                  </div>
                </div>
                <h2 class="text-black h1">John Rooster</h2>
                <span class="sub-title d-block mb-3">Marketing</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div class="person">
                <div class="bio-img">
                  <figure>
                    <img src="images/person_3.jpg" alt="Image" class="img-fluid" />
                  </figure>
                  <div class="social">
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                    <a href="#">
                      <span class="icon-instagram"></span>
                    </a>
                  </div>
                </div>
                <h2 class="text-black h1">Will Turner</h2>
                <span class="sub-title d-block mb-3">Marketing</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
              <div class="person">
                <div class="bio-img">
                  <figure>
                    <img src="images/person_4.jpg" alt="Image" class="img-fluid" />
                  </figure>
                  <div class="social">
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                    <a href="#">
                      <span class="icon-instagram"></span>
                    </a>
                  </div>
                </div>
                <h2 class="text-black h1">Nicolas Stainer</h2>
                <span class="sub-title d-block mb-3">Financing</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div class="person">
                <div class="bio-img">
                  <figure>
                    <img src="images/person_5.jpg" alt="Image" class="img-fluid" />
                  </figure>
                  <div class="social">
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                    <a href="#">
                      <span class="icon-instagram"></span>
                    </a>
                  </div>
                </div>
                <h2 class="text-black h1">George Brook</h2>
                <span class="sub-title d-block mb-3">Founder</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div class="person">
                <div class="bio-img">
                  <figure>
                    <img src="images/person_6.jpg" alt="Image" class="img-fluid" />
                  </figure>
                  <div class="social">
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                    <a href="#">
                      <span class="icon-instagram"></span>
                    </a>
                  </div>
                </div>
                <h2 class="text-black h1">Emely Hopson</h2>
                <span class="sub-title d-block mb-3">Marketing</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section testimonial-wrap bg-light" id="testimonials-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12 text-center">
              <h2 class="section-title mb-3">Testimonials</h2>
            </div>
          </div>
        </div>
        <div class="slide-one-item home-slider owl-carousel">
          <div>
            <div class="testimonial">
              <figure class="mb-4 d-block align-items-center justify-content-center">
                <div>
                  <img src="images/person_3.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow" />
                </div>
              </figure>
              <blockquote class="mb-3">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              <p class="text-black">
                <strong>John Smith</strong>
              </p>
            </div>
          </div>
          <div>
            <div class="testimonial">
              <figure class="mb-4 d-block align-items-center justify-content-center">
                <div>
                  <img src="images/person_2.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow" />
                </div>
              </figure>

              <blockquote class="mb-3">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>

              <p class="text-black">
                <strong>Robert Aguilar</strong>
              </p>
            </div>
          </div>

          <div>
            <div class="testimonial">
              <figure class="mb-4 d-block align-items-center justify-content-center">
                <div>
                  <img src="images/person_4.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow" />
                </div>
              </figure>
              <blockquote class="mb-3">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              <p class="text-black">
                <strong>Roger Spears</strong>
              </p>
            </div>
          </div>

          <div>
            <div class="testimonial">
              <figure class="mb-4 d-block align-items-center justify-content-center">
                <div>
                  <img src="images/person_1.jpg" alt="Image" class="w-100 img-fluid mb-3 shadow" />
                </div>
              </figure>
              <blockquote class="mb-3">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              <p class="text-black">
                <strong>Kyle McDonald</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section" id="blog-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12 text-center">
              <h2 class="section-title mb-3">Blog Posts</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div class="h-entry">
                <img src="images/img_1.jpg" alt="Image" class="img-fluid" />
                <h2>
                  <a href="#">Make Your Business More Profitable</a>
                </h2>
                <div class="meta mb-4">
                  Ham Brook
                  <span class="mx-2">&bullet;</span> Jan 18, 2019
                  <span class="mx-2">&bullet;</span>
                  <a href="#">News</a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                <p>
                  <a href="#">Continue Reading...</a>
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div class="h-entry">
                <img src="images/img_2.jpg" alt="Image" class="img-fluid" />
                <h2>
                  <a href="#">Make Your Business More Profitable</a>
                </h2>
                <div class="meta mb-4">
                  James Phelps
                  <span class="mx-2">&bullet;</span> Jan 18, 2019
                  <span class="mx-2">&bullet;</span>
                  <a href="#">News</a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                <p>
                  <a href="#">Continue Reading...</a>
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
              <div class="h-entry">
                <img src="images/img_3.jpg" alt="Image" class="img-fluid" />
                <h2>
                  <a href="#">Make Your Business More Profitable</a>
                </h2>
                <div class="meta mb-4">
                  James Phelps
                  <span class="mx-2">&bullet;</span> Jan 18, 2019
                  <span class="mx-2">&bullet;</span>
                  <a href="#">News</a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                <p>
                  <a href="#">Continue Reading...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="site-section bg-image2 overlay"
        id="contact-section"
        style="background-image: url('images/hero_1.jpg');"
      >
        <div class="container">
          <div class="row mb-5">
            <div class="col-12 text-center">
              <h2 class="section-title mb-3 text-white">Contact Us</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-7 mb-5">
              <form action="#" class="p-5 bg-white">
                <h2 class="h4 text-black mb-5">Contact Form</h2>

                <div class="row form-group">
                  <div class="col-md-6 mb-3 mb-md-0">
                    <label class="text-black" for="fname">First Name</label>
                    <input type="text" id="fname" class="form-control rounded-0" />
                  </div>
                  <div class="col-md-6">
                    <label class="text-black" for="lname">Last Name</label>
                    <input type="text" id="lname" class="form-control rounded-0" />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="text-black" for="email">Email</label>
                    <input type="email" id="email" class="form-control rounded-0" />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="text-black" for="subject">Subject</label>
                    <input type="subject" id="subject" class="form-control rounded-0" />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="text-black" for="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      class="form-control rounded-0"
                      placeholder="Leave your message here..."
                    ></textarea>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <input type="submit" value="Send Message" class="btn btn-primary mr-2 mb-2" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer py-5 text-center">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12">
              <p class="mb-0">
                <a href="#" class="p-3">
                  <span class="icon-facebook"></span>
                </a>
                <a href="#" class="p-3">
                  <span class="icon-twitter"></span>
                </a>
                <a href="#" class="p-3">
                  <span class="icon-instagram"></span>
                </a>
                <a href="#" class="p-3">
                  <span class="icon-linkedin"></span>
                </a>
                <a href="#" class="p-3">
                  <span class="icon-pinterest"></span>
                </a>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <p class="mb-0">
                Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  <!-- Copyright &copy;
                All rights reserved | This template is made with
                <i class="icon-heart text-danger" aria-hidden="true"></i> by
                <a href="https://colorlib.com" target="_blank">Colorlib</a> -->
  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
  <!-- </p>
            </div>
          </div>
        </div>
      </div>
  </div> -->
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
li span {
  color: tomato;
  position: absolute;
  line-height: 25px;
  font-weight: 600;
}
</style>
