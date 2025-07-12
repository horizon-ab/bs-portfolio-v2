import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  /* config options here */
  turbopack : {
    rules : {
      '*.mdx' : {
        loaders: ['@mdx-js/loader'],
        as: '*.js'
      }
    }
  }
};

// const withMDX = createMDX({

// })

// export default withMDX(nextConfig);

export default nextConfig;