import React, { useEffect, useState } from "react"

export const LandingPage = () => {
  const [index, setIndex] = useState(0)

  const wrappers = document.querySelectorAll(".wrapper")

  const next = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setIndex((prev) => {
      if (prev < 2) return prev + 1
      else return (prev = 0)
    })
  }

  const prev = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setIndex((prev) => {
      if (prev > 0) return prev - 1
      else return (prev = 2)
    })
  }

  const setWrapper = () => {
    wrappers.forEach((el) => {
      el.classList.add("hide")
      if (+el.getAttribute("data-index")! == index) {
        el.classList.remove("hide")
      }
    })
  }

  useEffect(() => {
    setWrapper()
  }, [index])

  return (
    <>
      <div className="wrapper" data-index="0">
        <div>
          <nav>
            <img src="/images/logo.svg" alt="" loading="lazy" />
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">shop</a>
              </li>
              <li>
                <a href="">about</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p>Discover innovative ways to decorate</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            adipisci reiciendis expedita, culpa debitis, ut pariatur dolorum
            illum excepturi cumque minima odit, architecto facere reprehenderit
            odio velit provident repellat voluptatem quidem. Impedit
            necessitatibus corporis omnis saepe natus fuga quam sunt!
          </p>
          <a href="">
            Shop now <img src="/images/icon-arrow.svg" alt="" loading="lazy" />
          </a>
          <div className="btns">
            <a href="" onClick={(e) => prev(e)}>
              <img
                src="/images/icon-angle-left.svg"
                alt=""
                loading="lazy"
                className="btn-prev"
              />
            </a>
            <a href="" onClick={(e) => next(e)}>
              <img
                src="/images/icon-angle-right.svg"
                alt=""
                loading="lazy"
                className="btn-next"
              />
            </a>
          </div>
        </div>
        <div></div>
        <div>
          <p className="title">About our furniture</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            laudantium repellendus voluptas doloremque sint porro fuga
            voluptatum quibusdam ea facilis aperiam at esse dolorem molestias,
            totam perferendis! Magni error vero nostrum officia placeat cum
            aliquam adipisci quae exercitationem porro quo molestias mollitia ea
            perspiciatis nemo expedita consequatur hic, reprehenderit ab!
          </p>
        </div>
        <div></div>
      </div>
      <div className="wrapper hide" data-index="1">
        <div>
          <nav>
            <img src="/images/logo.svg" alt="" loading="lazy" />
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">shop</a>
              </li>
              <li>
                <a href="">about</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p>We are available all across the globe</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            adipisci reiciendis expedita, culpa debitis, ut pariatur dolorum
            illum excepturi cumque minima odit, architecto facere reprehenderit
            odio velit provident repellat voluptatem quidem. Impedit
            necessitatibus corporis omnis saepe natus fuga quam sunt!
          </p>
          <a href="">
            Shop now <img src="/images/icon-arrow.svg" alt="" loading="lazy" />
          </a>
          <div className="btns">
            <a href="" onClick={(e) => prev(e)}>
              <img
                src="/images/icon-angle-left.svg"
                alt=""
                loading="lazy"
                className="btn-prev"
              />
            </a>
            <a href="" onClick={(e) => next(e)}>
              <img
                src="/images/icon-angle-right.svg"
                alt=""
                loading="lazy"
                className="btn-next"
              />
            </a>
          </div>
        </div>
        <div></div>
        <div>
          <p className="title">About our furniture</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            laudantium repellendus voluptas doloremque sint porro fuga
            voluptatum quibusdam ea facilis aperiam at esse dolorem molestias,
            totam perferendis! Magni error vero nostrum officia placeat cum
            aliquam adipisci quae exercitationem porro quo molestias mollitia ea
            perspiciatis nemo expedita consequatur hic, reprehenderit ab!
          </p>
        </div>
        <div></div>
      </div>
      <div className="wrapper hide" data-index="2">
        <div>
          <nav>
            <img src="/images/logo.svg" alt="" loading="lazy" />
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">shop</a>
              </li>
              <li>
                <a href="">about</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p>Made from the best materials</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            adipisci reiciendis expedita, culpa debitis, ut pariatur dolorum
            illum excepturi cumque minima odit, architecto facere reprehenderit
            odio velit provident repellat voluptatem quidem. Impedit
            necessitatibus corporis omnis saepe natus fuga quam sunt!
          </p>
          <a href="">
            Shop now <img src="/images/icon-arrow.svg" alt="" loading="lazy" />
          </a>
          <div className="btns">
            <a href="" onClick={(e) => prev(e)}>
              <img
                src="/images/icon-angle-left.svg"
                alt=""
                loading="lazy"
                className="btn-prev"
              />
            </a>
            <a href="" onClick={(e) => next(e)}>
              <img
                src="/images/icon-angle-right.svg"
                alt=""
                loading="lazy"
                className="btn-next"
              />
            </a>
          </div>
        </div>
        <div></div>
        <div>
          <p className="title">About our furniture</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque,
            laudantium repellendus voluptas doloremque sint porro fuga
            voluptatum quibusdam ea facilis aperiam at esse dolorem molestias,
            totam perferendis! Magni error vero nostrum officia placeat cum
            aliquam adipisci quae exercitationem porro quo molestias mollitia ea
            perspiciatis nemo expedita consequatur hic, reprehenderit ab!
          </p>
        </div>
        <div></div>
      </div>
    </>
  )
}
