// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
    return config;
  },
};

export default nextConfig;
