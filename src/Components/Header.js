import React from "react";
import news1 from "../images/news1.jpg";
import news2 from "../images/news2.jpg";
import news3 from "../images/news3.jpg";
import a1 from "../images/a1.jpg";

export default function Header() {
  return (
    <div>
      <div class="w3l-banner py-5">
        <div class="container py-lg-3 py-md-3">
          <div class="ban-content-inf row py-lg-3">
            <div class="maghny-gd-1 col-lg-8">
              <div class="maghny-grid">
                <figure class="effect-lily border-radius">
                  <img class="img-fluid radius-image" src={news2} alt="" />
                  <figcaption class="w3set-hny">
                    <div class="info">
                      <a href="#reciepe" class="receipe">
                        Reciepe
                      </a>
                      <h4 class="top-text">
                        Amazing Milk Chocolate Cupcakes with Buttercream
                      </h4>
                      <p class="mt-2 d-sm-block d-none">
                        Lorem ipsum dolor sit amet elit. Vitae nostrum ipsum
                        vero tempore esse, eaque omnis culpa quo placeat?
                      </p>
                      <div class="p-footer">
                        <aside class="p-meta-info">
                          <a href="#img" class="post-img-anchor">
                            <img src={a1} alt="" class="post-img" />
                          </a>
                          <a href="#url">Elizabeth</a>
                          <span class="meta-info-date">
                            <span class="fa fa-clock-o"></span> Oct 3, 2020
                          </span>
                        </aside>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="maghny-gd-1 col-lg-4 mt-lg-0 mt-4 mobile-grid">
              <div class="maghny-gd-1">
                <div class="maghny-grid">
                  <figure class="effect-lily border-radius">
                    <img class="img-fluid radius-image" src={news1} alt="" />
                    <figcaption>
                      <div>
                        <h4 class="top-text1">
                          Amazing Milk Chocolate Cupcake with cream
                        </h4>
                        <aside class="p-meta-info">
                          <span class="meta-info-el meta-info-custom">
                            <span class="fa fa-clock-o mr-2"></span>10 Min Cook
                          </span>
                        </aside>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="maghny-gd-1 mt-lg-4">
                <div class="maghny-grid">
                  <figure class="effect-lily border-radius">
                    <img class="img-fluid radius-image" src={news3} alt="" />
                    <figcaption>
                      <div>
                        <h4 class="top-text1">
                          The Best Chewy Chocolate Chip Cookies Recipe
                        </h4>
                        <aside class="p-meta-info">
                          <span class="meta-info-el meta-info-custom">
                            <span class="fa fa-bell-o mr-2"></span>Sponsered by
                            <strong>Johnson</strong>
                          </span>
                        </aside>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
