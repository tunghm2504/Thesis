import React from "react";
import Header from "../Header/Header";
import HouseItem from "../HouseItem/HouseItem";
import HouseList from "../HouseList/HouseList";
import Pagination from "../Pagination/Pagination";
import "./FilterHouses.css";

export default function FilterHouses() {
  return (
    <>
      <Header type="" />
      {/* <nav class="navbar navbar-expand-sm navbar-light bg-white border-bottom">
        <a class="navbar-brand ml-2 font-weight-bold" href="#">
          <span id="burgundy">The</span>
          <span id="orange">Bakeshop</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor"
          aria-controls="navbarColor"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor">
          <ul class="navbar-nav">
            <li class="nav-item rounded bg-light search-nav-item">
              <input
                type="text"
                id="search"
                class="bg-light"
                placeholder="Search bread, cakes, desserts"
              />
              <span class="fa fa-search text-muted"></span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="fa fa-user-o"></span>
                <span class="text">Login</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span class="fa fa-shopping-cart"></span>
                <span class="text">Cart</span>
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div class="container-fluid">
        <div class="filter">
          <button
            class="btnFilter btnFilter-default"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobile-filter"
            aria-expanded="false"
            aria-controls="mobile-filter"
            aria-label="Toggle navigation"
          >
            Filters<span class="fa fa-filter pl-1"></span>
          </button>
        </div>
        <div id="mobile-filter">
          <div class="border-bottom pb-2 ml-2">
            <h4 id="burgundy">Filters</h4>
          </div>
          <div class="py-2 border-bottom ml-3">
            <h6 class="font-weight-bold">Categories</h6>
            <div id="orange">
              <span class="fa fa-minus"></span>
            </div>
            <form>
              <div class="form-group">
                <input type="checkbox" id="artisan" />
                <label for="artisan">Fresh Artisan Breads</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="breakfast" />
                <label for="breakfast">Breakfast Breads</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="healthy" />
                <label for="healthy">Healthy Breads</label>
              </div>
            </form>
          </div>
          <div class="py-2 border-bottom ml-3">
            <h6 class="font-weight-bold">Accompainments</h6>
            <div id="orange">
              <span class="fa fa-minus"></span>
            </div>
            <form>
              <div class="form-group">
                <input type="checkbox" id="tea" />
                <label for="tea">Tea Cakes</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="cookies" />
                <label for="cookies">Cookies</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="pastries" />
                <label for="pastries">Pastries</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="dough" />
                <label for="dough">Cookie Dough</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="choco" />
                <label for="choco">Chocolates</label>
              </div>
            </form>
          </div>
          <div class="py-2 ml-3">
            <h6 class="font-weight-bold">Top Offers</h6>
            <div id="orange">
              <span class="fa fa-minus"></span>
            </div>
            <form>
              <div class="form-group">
                <input type="checkbox" id="25off" />
                <label for="25">25% off</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="5off" />
                <label for="5off" id="off">
                  5% off on artisan breads
                </label>
              </div>
            </form>
          </div>
        </div>

        <section
          id="sidebar"
          style={{ position: "sticky", height: "max-content" }}
        >
          <div class="border-bottom pb-2 ml-2">
            <h4 id="burgundy">Filters</h4>
          </div>
          <div class="py-2 border-bottom ml-3">
            <h6 class="font-weight-bold">Categories</h6>
            <div id="orange">
              <span class="fa fa-minus"></span>
            </div>
            <form>
              <div class="form-group">
                <input type="checkbox" id="artisan" />
                <label for="artisan">Fresh Artisan Breads</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="breakfast" />
                <label for="breakfast">Breakfast Breads</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="healthy" />
                <label for="healthy">Healthy Breads</label>
              </div>
            </form>
          </div>
          <div class="py-2 border-bottom ml-3">
            <h6 class="font-weight-bold">Accompainments</h6>
            <div id="orange">
              <span class="fa fa-minus"></span>
            </div>
            <form>
              <div class="form-group">
                <input type="checkbox" id="tea" />
                <label for="tea">Tea Cakes</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="cookies" />
                <label for="cookies">Cookies</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="pastries" />
                <label for="pastries">Pastries</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="dough" />
                <label for="dough">Cookie Dough</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="choco" />
                <label for="choco">Chocolates</label>
              </div>
            </form>
          </div>
          <div class="py-2 ml-3">
            <h6 class="font-weight-bold">Top Offers</h6>
            <div id="orange">
              <span class="fa fa-minus"></span>
            </div>
            <form>
              <div class="form-group">
                <input type="checkbox" id="25off" />
                <label for="25">25% off</label>
              </div>
              <div class="form-group">
                <input type="checkbox" id="5off" />
                <label for="5off" id="off">
                  5% off on artisan breads
                </label>
              </div>
            </form>
          </div>
        </section>
        <section id="products">
          <div class="container">
            <div class="d-flex flex-row">
              <div class="ml-auto mr-lg-4">
                <div id="sorting" class="border rounded p-1 m-1">
                  <span class="text-muted">Sort by</span>
                  <select name="sort" id="sort">
                    <option value="popularity">Popularity</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              {/* <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div class="cardHouseFilter">
                  <img
                    class="cardHouseFilter-img-top"
                    src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="imageHouse"
                  />
                  <div class="cardHouseFilter-body">
                    <h5>
                      <b>Multi Grain Bread</b>
                    </h5>
                    <div class="d-flex flex-row my-2">
                      <div class="text-muted">₹110/loaf</div>
                      <div class="ml-auto">
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-plus" id="orange"></span>
                        </button>
                        <span class="px-sm-1">1 loaf</span>
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-minus" id="orange"></span>
                        </button>
                      </div>
                    </div>
                    <button class="btnFilter w-100 rounded my-2">Add to cart</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div class="cardHouseFilter">
                  <img
                    class="cardHouseFilter-img-top"
                    src="https://images.pexels.com/photos/3085146/pexels-photo-3085146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="imageHouse"
                  />
                  <div class="cardHouseFilter-body">
                    <h5>
                      <b>Bagels</b>
                    </h5>
                    <div class="d-flex flex-row my-2">
                      <div class="text-muted">₹35/piece</div>
                      <div class="ml-auto">
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-plus" id="orange"></span>
                        </button>
                        <span class="px-sm-1">1 pc</span>
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-minus" id="orange"></span>
                        </button>
                      </div>
                    </div>
                    <button class="btnFilter w-100 rounded my-2">Add to cart</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div class="cardHouseFilter">
                  <img
                    class="cardHouseFilter-img-top"
                    src="https://images.pexels.com/photos/1448665/pexels-photo-1448665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="imageHouse"
                  />
                  <div class="cardHouseFilter-body">
                    <h5>
                      <b>White Bread</b>
                    </h5>
                    <div class="d-flex flex-row my-2">
                      <div class="text-muted">₹80/loaf</div>
                      <div class="ml-auto">
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-plus" id="orange"></span>
                        </button>
                        <span class="px-sm-1">1 loaf</span>
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-minus" id="orange"></span>
                        </button>
                      </div>
                    </div>
                    <button class="btnFilter w-100 rounded my-2">Add to cart</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div class="cardHouseFilter">
                  <img
                    class="cardHouseFilter-img-top"
                    src="https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="imageHouse"
                  />
                  <div class="cardHouseFilter-body">
                    <h5>
                      <b>Baguette</b>
                    </h5>
                    <div class="d-flex flex-row my-2">
                      <div class="text-muted">₹160/piece</div>
                      <div class="ml-auto">
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-plus" id="orange"></span>
                        </button>
                        <span class="px-sm-1">1 pc</span>
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-minus" id="orange"></span>
                        </button>
                      </div>
                    </div>
                    <button class="btnFilter w-100 rounded my-2">Add to cart</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div class="cardHouseFilter">
                  <img
                    class="cardHouseFilter-img-top"
                    src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="imageHouse"
                  />
                  <div class="cardHouseFilter-body">
                    <h5>
                      <b>Masala Bun</b>
                    </h5>
                    <div class="d-flex flex-row my-2">
                      <div class="text-muted">₹85/piece</div>
                      <div class="ml-auto">
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-plus" id="orange"></span>
                        </button>
                        <span class="px-sm-1">1 pc</span>
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-minus" id="orange"></span>
                        </button>
                      </div>
                    </div>
                    <button class="btnFilter w-100 rounded my-2">Add to cart</button>
                  </div>
                </div>
              </div> */}
              <div class="row row-cols-1 row-cols-md-3 g-4">
                {/* <div class="cardHouseFilter d-relative">
                  <img
                    class="cardHouseFilter-img-top"
                    src="https://images.pexels.com/photos/3570/morning-breakfast-croissant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="imageHouse"
                  />
                  <div class="cardHouseFilter-body">
                    <h5>
                      <b>Croissant</b>
                    </h5>
                    <div class="rounded bg-white discount" id="orange">
                      10% off
                    </div>
                    <div class="d-flex flex-row my-2">
                      <div class="text-muted price">
                        <del>₹55</del>₹45/piece
                      </div>
                      <div class="ml-auto">
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-plus" id="orange"></span>
                        </button>
                        <span>1pc</span>
                        <button class="border rounded bg-white sign">
                          <span class="fa fa-minus" id="orange"></span>
                        </button>
                      </div>
                    </div>
                    <button class="btnFilter w-100 rounded my-2">Add to cart</button>
                  </div> 
                </div>*/}
                <HouseList />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}