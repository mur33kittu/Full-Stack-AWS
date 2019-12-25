import React, {Component} from 'react';
import home1 from '../../../../public/assets/png/home1.png';
import home2 from '../../../../public/assets/png/home2.png';
import home3 from '../../../../public/assets/png/home3.png';
import home4 from '../../../../public/assets/png/home4.png';
import home5 from '../../../../public/assets/png/home5.png';
import home6 from '../../../../public/assets/png/home6.png';
import home7 from '../../../../public/assets/png/home7.png';
import one from '../../../../public/assets/png/one.png';
import two from '../../../../public/assets/png/two.png';

import './home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="slider">
        <div className="flex-container">
          <div className="slides">
            <div id="slide-1">
              <img src={home1} alt="home1" />
            </div>
            <div id="slide-2">
              <img src={home2} alt="home2" />
            </div>
            <div id="slide-3">
              <img src={home3} alt="home3" />
            </div>
            <div id="slide-4">
              <img src={home4} alt="home4" />
            </div>
            <div id="slide-5">
              <img src={home5} alt="home5" />
            </div>
            <div id="slide-6">
              <img src={home6} alt="home6" />
            </div>
            <div id="slide-7">
              <img src={home7} alt="home7" />
            </div>
          </div>
        </div>
        <div className="flex-container">
          <div className="initial-text">
            If you’ve never taken on a tiling project before, you might be
            surprised by the many different types of tiles available. Ceramic
            and porcelain tiles are the most popular, but there are also glass
            tiles, cement tiles, metal tiles, and stone tiles—to name just a
            few. To make it even more confusing, not every type of tile works
            for every job. And, of course, there's your budget to consider. It’s
            hard not to feel a little overwhelmed. Whether you’re shopping for
            an immediate project or just planning for the future, we enlisted
            some experts to guide you through the 12 most common types of floor
            tiles and wall tiles. Find out which tiles are best for every type
            of home project to ensure you'll love your remodel for years to
            come.
          </div>
        </div>
        <div className="flex-container">
          <div>
            <b>1 Ceramic Tiles</b>
            <p>
              Ceramic tile is one of the most common types of tile found in the
              home because it’s suitable for many applications. “Increased
              durability makes ceramic tile perfect for any room in the house,
              such as kitchens, bathrooms, or even entryways,” says Tony
              Castellano, senior merchant for The Home Depot. “It’s easy to
              install, clean, and comes in hundreds of styles that can fit any
              design. For a bonus, if you’re looking to renovate on a budget,
              ceramic offers a great price point.” When shopping, Castellano
              recommends checking the ceramic tile lot number to ensure you have
              a clean, uniform end result. “Additionally, make sure you
              understand the difference between glazed and unglazed. While
              unglazed gives an artistic, rustic finish, glazed ceramic tiles
              provide more protection for longer lasting floors.” Try: Restore
              Bright White 3x6 in. Ceramic Bevel Wall Tile, $2.16/sq. ft.;
              homedepot.com.
            </p>
            <img src={one} alt="1" />
          </div>
          <div>
            <b>2 Porcelain Tiles</b>
            <p>
              The other most common type of tile is porcelain, which differs
              from ceramic tile. “The appeal of porcelain comes from its ability
              to emulate natural stone, brick, or wood—and without any of the
              maintenance,” Castellano says. “You get the same elegant finish
              without any of the upkeep or weathering. In addition, as it’s an
              all-purpose tile, it comes in a variety of designs, colors, and
              styles to allow for versatility when designing a space. Porcelain
              can even be used outdoors, as it will not freeze, fade, or crack.”
              Other applications for porcelain tile include bath or kitchen
              tile, high-traffic areas, and kitchen backsplashes. The biggest
              drawback with porcelain tile is that installation can be tricky.
              While you can DIY an install, Castellano says many homeowners
              forget that you also need an adhesive when laying down this type
              of flooring. Try: Wind River Grey 6x24 in. Porcelain Floor and
              Wall Tile, $1.49/sq. ft.; homedepot.com.
            </p>
            <img src={two} alt="2" />
          </div>
          <div>
            <b>3 Glass Tiles</b>
            <p>
              The stain resistance of glass makes it a fantastic alternative to
              natural stone. Red wine and any acidic foods like lemon and
              vinegar are wiped up with ease without any permanent staining,”
              says Melissa Morgan, an interior designer and founder of M
              Interiors in San Antonio, Texas. This type of tile also offers a
              clean and minimalistic aesthetic. “A potential drawback is that
              glass will, of course, chip quite easily along the edges,” Morgan
              says. For that reason, she recommends not using glass tile in
              high-traffic areas like kitchen and bathroom floors. Instead, she
              suggests using them in smaller applications with less traction,
              such as gently used table tops or desks, around the fireplace, or
              as a backsplash.
            </p>
            <img src={two} alt="3" />
          </div>
          <div>
            <b>4 Cement Tiles</b>
            <p>
              Cement tiles have been around since the 19th century and they’re
              currently experiencing a bit of a boon in modern interior design,
              says Docia Boylen, franchise owner of Handyman Connection, a home
              remodeling and repair service based in Lakewood, Colorado. “Cement
              tiles are extremely versatile and can provide you with amazing
              patterns and colors,” Boylen says. “Since the tiles are extremely
              porous, a patina can develop over time to enhance the pattern.
              They can also be sanded and resealed, like wood floors, if they
              get discolored over time.” The biggest drawback to cement tiles is
              that they’re a beast to lay. Additionally, cement tile must be
              resealed once a month to maintain its beauty. Cement is best used
              in low-traffic areas and in small quantities.
            </p>
            <img src={two} alt="4" />
          </div>
          <div>
            <b>5 Marble Tiles</b>
            <p>
              Though costly, marble tile adds an instant touch of elegance and
              refinement to any room. “If you’re looking to add beauty to any
              kitchen or bath, laying down marble tiles immediately upgrades the
              space,” Castellano says. “It also delivers texture and depth, as
              it’s either patterned or veined. You’ll never have the same
              piece.” In addition to being quite costly, marble requires a lot
              of upkeep to keep it looking pristine. And like any stone, marble
              tile is susceptible to scratches and stains in addition to being
              difficult to clean. “Due to marble’s predisposition to scratches,
              etching, and stains, it’s best used in low-traffic areas unless a
              sealant is applied,” Castellano says. “Many homeowners avoid using
              marble in countertops and instead add marble in decorative
              features, such as shower floors, columns, and backsplashes.” By
              using it in smaller applications, you’ll also give your budget a
              breather.
            </p>
            <img src={two} alt="4" />
          </div>
        </div>
      </div>
    );
  }
}
