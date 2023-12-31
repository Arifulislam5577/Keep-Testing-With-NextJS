"use client";

import { Empty } from "keep-react-demo";
import Image from "next/image";

const NotFound = () => {
  return (
    <div>
      <Empty
        title="Oops! You seem to be lost"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        redirectUrl="/"
        image={
          <Image
            src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
            height={234}
            width={350}
            alt="404"
          />
        }
      />
    </div>
  );
};

export default NotFound;
