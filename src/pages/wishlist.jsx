// import { Helmet } from 'react-helmet-async';

// import { WishlistView } from 'src/sections/wishlist/view';

// // ----------------------------------------------------------------------

// export default function WishlistPage() {
//   return (
//     <>
//       <Helmet>
//         <title> Wish List </title>
//       </Helmet>

//       <WishlistView />
//     </>
//   );
// }

import { Helmet } from 'react-helmet-async';

import { WishlistView } from 'src/sections/wishlist/view';

// ----------------------------------------------------------------------

export default function WishlistPage() {
  return (
    <>
      <Helmet>
        <title> Profile </title>
      </Helmet>

      <WishlistView />
    </>
  );
}
