module.exports = [
"[project]/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/utils/warn-once.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "warnOnce", {
    enumerable: true,
    get: function() {
        return warnOnce;
    }
});
let warnOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const warnings = new Set();
    warnOnce = (msg)=>{
        if (!warnings.has(msg)) {
            console.warn(msg);
        }
        warnings.add(msg);
    };
} //# sourceMappingURL=warn-once.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/image-blur-svg.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? `viewBox='0 0 ${svgWidth} ${svgHeight}'` : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${preserveAspectRatio}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
} //# sourceMappingURL=image-blur-svg.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/image-config.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    /**
   * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
   */ domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: [
        'image/webp'
    ],
    maximumRedirects: 3,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: [
        75
    ],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/get-img-props.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/utils/warn-once.js [app-rsc] (ecmascript)");
const _imageblursvg = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-blur-svg.js [app-rsc] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-config.js [app-rsc] (ecmascript)");
const VALID_LOADING_VALUES = [
    'lazy',
    'eager',
    undefined
];
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths({ deviceSizes, allSizes }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config, src, unoptimized, width, quality, sizes, loader }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, _state) {
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && !preload && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        if (config.output === 'export' && isDefaultLoader && !unoptimized) {
            throw Object.defineProperty(new Error(`Image Optimization using the default loader is not compatible with \`{ output: 'export' }\`.
  Possible solutions:
    - Remove \`{ output: 'export' }\` and run "next start" to run server mode including the Image Optimization API.
    - Configure \`{ images: { unoptimized: true } }\` in \`next.config.js\` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api`), "__NEXT_ERROR_CODE", {
                value: "E500",
                enumerable: false,
                configurable: true
            });
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E96",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (height) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E115",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.position && style.position !== 'absolute') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E216",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.width && style.width !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E73",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.height && style.height !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E404",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                if (typeof widthInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
                        value: "E451",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(widthInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "width" property. Expected a numeric value in pixels but received "${width}".`), "__NEXT_ERROR_CODE", {
                        value: "E66",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (typeof heightInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
                        value: "E397",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(heightInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "height" property. Expected a numeric value in pixels but received "${height}".`), "__NEXT_ERROR_CODE", {
                        value: "E444",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/^[\x00-\x20]/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E176",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/[\x00-\x20]$/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E21",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`), "__NEXT_ERROR_CODE", {
                value: "E357",
                enumerable: false,
                configurable: true
            });
        }
        if (priority && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E218",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E803",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && priority) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
                value: "E802",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty' && placeholder !== 'blur' && !placeholder.startsWith('data:image/')) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "placeholder" property "${placeholder}".`), "__NEXT_ERROR_CODE", {
                value: "E431",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty') {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`);
            }
        }
        if (qualityInt && config.qualities && !config.qualities.includes(qualityInt)) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using quality "${qualityInt}" which is not configured in images.qualities [${config.qualities.join(', ')}]. Please update your config to [${[
                ...config.qualities,
                qualityInt
            ].sort().join(', ')}].` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`);
        }
        if (placeholder === 'blur' && !blurDataURL) {
            const VALID_BLUR_EXT = [
                'jpeg',
                'png',
                'webp',
                'avif'
            ] // should match next-image-loader
            ;
            throw Object.defineProperty(new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
                value: "E371",
                enumerable: false,
                configurable: true
            });
        }
        if ('ref' in rest) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`);
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has legacy prop "${legacyKey}". Did you forget to run the codemod?` + `\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
            }
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    })}")` : `url("${placeholder}")` // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === 'blur' && blurDataURL?.startsWith('/')) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = `url("${blurDataURL}")`;
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    const loadingFinal = isLazy ? 'lazy' : loading;
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    const props = {
        ...rest,
        loading: loadingFinal,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        preload: preload || priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map
}),
"[project]/client/node_modules/next/dist/client/image-component.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/client/node_modules/next/dist/client/image-component.js <module evaluation>"));
}),
"[project]/client/node_modules/next/dist/client/image-component.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/client/node_modules/next/dist/client/image-component.js"));
}),
"[project]/client/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/image-component.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/image-component.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/client/node_modules/next/dist/shared/lib/find-closest-quality.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findClosestQuality", {
    enumerable: true,
    get: function() {
        return findClosestQuality;
    }
});
function findClosestQuality(quality, config) {
    const q = quality || 75;
    if (!config?.qualities?.length) {
        return q;
    }
    return config.qualities.reduce((prev, cur)=>Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev, 0);
} //# sourceMappingURL=find-closest-quality.js.map
}),
"[project]/client/node_modules/next/dist/compiled/picomatch/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var t = {
        170: (t, e, u)=>{
            const n = u(510);
            const isWindows = ()=>{
                if (typeof navigator !== "undefined" && navigator.platform) {
                    const t = navigator.platform.toLowerCase();
                    return t === "win32" || t === "windows";
                }
                if (typeof process !== "undefined" && process.platform) {
                    return process.platform === "win32";
                }
                return false;
            };
            function picomatch(t, e, u = false) {
                if (e && (e.windows === null || e.windows === undefined)) {
                    e = {
                        ...e,
                        windows: isWindows()
                    };
                }
                return n(t, e, u);
            }
            Object.assign(picomatch, n);
            t.exports = picomatch;
        },
        154: (t)=>{
            const e = "\\\\/";
            const u = `[^${e}]`;
            const n = "\\.";
            const o = "\\+";
            const s = "\\?";
            const r = "\\/";
            const a = "(?=.)";
            const i = "[^/]";
            const c = `(?:${r}|$)`;
            const p = `(?:^|${r})`;
            const l = `${n}{1,2}${c}`;
            const f = `(?!${n})`;
            const A = `(?!${p}${l})`;
            const _ = `(?!${n}{0,1}${c})`;
            const R = `(?!${l})`;
            const E = `[^.${r}]`;
            const h = `${i}*?`;
            const g = "/";
            const b = {
                DOT_LITERAL: n,
                PLUS_LITERAL: o,
                QMARK_LITERAL: s,
                SLASH_LITERAL: r,
                ONE_CHAR: a,
                QMARK: i,
                END_ANCHOR: c,
                DOTS_SLASH: l,
                NO_DOT: f,
                NO_DOTS: A,
                NO_DOT_SLASH: _,
                NO_DOTS_SLASH: R,
                QMARK_NO_DOT: E,
                STAR: h,
                START_ANCHOR: p,
                SEP: g
            };
            const C = {
                ...b,
                SLASH_LITERAL: `[${e}]`,
                QMARK: u,
                STAR: `${u}*?`,
                DOTS_SLASH: `${n}{1,2}(?:[${e}]|$)`,
                NO_DOT: `(?!${n})`,
                NO_DOTS: `(?!(?:^|[${e}])${n}{1,2}(?:[${e}]|$))`,
                NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e}]|$))`,
                NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e}]|$))`,
                QMARK_NO_DOT: `[^.${e}]`,
                START_ANCHOR: `(?:^|[${e}])`,
                END_ANCHOR: `(?:[${e}]|$)`,
                SEP: "\\"
            };
            const y = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            t.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: y,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                extglobChars (t) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: `))${t.STAR})`
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (t) {
                    return t === true ? C : b;
                }
            };
        },
        697: (t, e, u)=>{
            const n = u(154);
            const o = u(96);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
            const expandRange = (t, e)=>{
                if (typeof e.expandRange === "function") {
                    return e.expandRange(...t, e);
                }
                t.sort();
                const u = `[${t.join("-")}]`;
                try {
                    new RegExp(u);
                } catch (e) {
                    return t.map((t)=>o.escapeRegex(t)).join("..");
                }
                return u;
            };
            const syntaxError = (t, e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`;
            const parse = (t, e)=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected a string");
                }
                t = c[t] || t;
                const u = {
                    ...e
                };
                const p = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                let l = t.length;
                if (l > p) {
                    throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: u.prepend || ""
                };
                const A = [
                    f
                ];
                const _ = u.capture ? "" : "?:";
                const R = n.globChars(u.windows);
                const E = n.extglobChars(R);
                const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
                const globstar = (t)=>`(${_}(?:(?!${L}${t.dot ? y : h}).)*?)`;
                const T = u.dot ? "" : $;
                const O = u.dot ? H : v;
                let k = u.bash === true ? globstar(u) : d;
                if (u.capture) {
                    k = `(${k})`;
                }
                if (typeof u.noext === "boolean") {
                    u.noextglob = u.noext;
                }
                const m = {
                    input: t,
                    index: -1,
                    start: 0,
                    dot: u.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                t = o.removePrefix(t, m);
                l = t.length;
                const w = [];
                const N = [];
                const I = [];
                let B = f;
                let G;
                const eos = ()=>m.index === l - 1;
                const D = m.peek = (e = 1)=>t[m.index + e];
                const M = m.advance = ()=>t[++m.index] || "";
                const remaining = ()=>t.slice(m.index + 1);
                const consume = (t = "", e = 0)=>{
                    m.consumed += t;
                    m.index += e;
                };
                const append = (t)=>{
                    m.output += t.output != null ? t.output : t.value;
                    consume(t.value);
                };
                const negate = ()=>{
                    let t = 1;
                    while(D() === "!" && (D(2) !== "(" || D(3) === "?")){
                        M();
                        m.start++;
                        t++;
                    }
                    if (t % 2 === 0) {
                        return false;
                    }
                    m.negated = true;
                    m.start++;
                    return true;
                };
                const increment = (t)=>{
                    m[t]++;
                    I.push(t);
                };
                const decrement = (t)=>{
                    m[t]--;
                    I.pop();
                };
                const push = (t)=>{
                    if (B.type === "globstar") {
                        const e = m.braces > 0 && (t.type === "comma" || t.type === "brace");
                        const u = t.extglob === true || w.length && (t.type === "pipe" || t.type === "paren");
                        if (t.type !== "slash" && t.type !== "paren" && !e && !u) {
                            m.output = m.output.slice(0, -B.output.length);
                            B.type = "star";
                            B.value = "*";
                            B.output = k;
                            m.output += B.output;
                        }
                    }
                    if (w.length && t.type !== "paren") {
                        w[w.length - 1].inner += t.value;
                    }
                    if (t.value || t.output) append(t);
                    if (B && B.type === "text" && t.type === "text") {
                        B.output = (B.output || B.value) + t.value;
                        B.value += t.value;
                        return;
                    }
                    t.prev = B;
                    A.push(t);
                    B = t;
                };
                const extglobOpen = (t, e)=>{
                    const n = {
                        ...E[e],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = B;
                    n.parens = m.parens;
                    n.output = m.output;
                    const o = (u.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: t,
                        value: e,
                        output: m.output ? "" : C
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: M(),
                        output: o
                    });
                    w.push(n);
                };
                const extglobClose = (t)=>{
                    let n = t.close + (u.capture ? ")" : "");
                    let o;
                    if (t.type === "negate") {
                        let s = k;
                        if (t.inner && t.inner.length > 1 && t.inner.includes("/")) {
                            s = globstar(u);
                        }
                        if (s !== k || eos() || /^\)+$/.test(remaining())) {
                            n = t.close = `)$))${s}`;
                        }
                        if (t.inner.includes("*") && (o = remaining()) && /^\.[^\\/.]+$/.test(o)) {
                            const u = parse(o, {
                                ...e,
                                fastpaths: false
                            }).output;
                            n = t.close = `)${u})${s})`;
                        }
                        if (t.prev.type === "bos") {
                            m.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: G,
                        output: n
                    });
                    decrement("parens");
                };
                if (u.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t)) {
                    let n = false;
                    let s = t.replace(i, (t, e, u, o, s, r)=>{
                        if (o === "\\") {
                            n = true;
                            return t;
                        }
                        if (o === "?") {
                            if (e) {
                                return e + o + (s ? H.repeat(s.length) : "");
                            }
                            if (r === 0) {
                                return O + (s ? H.repeat(s.length) : "");
                            }
                            return H.repeat(u.length);
                        }
                        if (o === ".") {
                            return h.repeat(u.length);
                        }
                        if (o === "*") {
                            if (e) {
                                return e + o + (s ? k : "");
                            }
                            return k;
                        }
                        return e ? t : `\\${t}`;
                    });
                    if (n === true) {
                        if (u.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (t)=>t.length % 2 === 0 ? "\\\\" : t ? "\\" : "");
                        }
                    }
                    if (s === t && u.contains === true) {
                        m.output = t;
                        return m;
                    }
                    m.output = o.wrapOutput(s, m, e);
                    return m;
                }
                while(!eos()){
                    G = M();
                    if (G === "\0") {
                        continue;
                    }
                    if (G === "\\") {
                        const t = D();
                        if (t === "/" && u.bash !== true) {
                            continue;
                        }
                        if (t === "." || t === ";") {
                            continue;
                        }
                        if (!t) {
                            G += "\\";
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                        const e = /^\\+/.exec(remaining());
                        let n = 0;
                        if (e && e[0].length > 2) {
                            n = e[0].length;
                            m.index += n;
                            if (n % 2 !== 0) {
                                G += "\\";
                            }
                        }
                        if (u.unescape === true) {
                            G = M();
                        } else {
                            G += M();
                        }
                        if (m.brackets === 0) {
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                    }
                    if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                        if (u.posix !== false && G === ":") {
                            const t = B.value.slice(1);
                            if (t.includes("[")) {
                                B.posix = true;
                                if (t.includes(":")) {
                                    const t = B.value.lastIndexOf("[");
                                    const e = B.value.slice(0, t);
                                    const u = B.value.slice(t + 2);
                                    const n = r[u];
                                    if (n) {
                                        B.value = e + n;
                                        m.backtrack = true;
                                        M();
                                        if (!f.output && A.indexOf(B) === 1) {
                                            f.output = C;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                            G = `\\${G}`;
                        }
                        if (G === "]" && (B.value === "[" || B.value === "[^")) {
                            G = `\\${G}`;
                        }
                        if (u.posix === true && G === "!" && B.value === "[") {
                            G = "^";
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (m.quotes === 1 && G !== '"') {
                        G = o.escapeRegex(G);
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (G === '"') {
                        m.quotes = m.quotes === 1 ? 0 : 1;
                        if (u.keepQuotes === true) {
                            push({
                                type: "text",
                                value: G
                            });
                        }
                        continue;
                    }
                    if (G === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: G
                        });
                        continue;
                    }
                    if (G === ")") {
                        if (m.parens === 0 && u.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const t = w[w.length - 1];
                        if (t && m.parens === t.parens + 1) {
                            extglobClose(w.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: G,
                            output: m.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (G === "[") {
                        if (u.nobracket === true || !remaining().includes("]")) {
                            if (u.nobracket !== true && u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            G = `\\${G}`;
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: G
                        });
                        continue;
                    }
                    if (G === "]") {
                        if (u.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        if (m.brackets === 0) {
                            if (u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        decrement("brackets");
                        const t = B.value.slice(1);
                        if (B.posix !== true && t[0] === "^" && !t.includes("/")) {
                            G = `/${G}`;
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        if (u.literalBrackets === false || o.hasRegexChars(t)) {
                            continue;
                        }
                        const e = o.escapeRegex(B.value);
                        m.output = m.output.slice(0, -B.value.length);
                        if (u.literalBrackets === true) {
                            m.output += e;
                            B.value = e;
                            continue;
                        }
                        B.value = `(${_}${e}|${B.value})`;
                        m.output += B.value;
                        continue;
                    }
                    if (G === "{" && u.nobrace !== true) {
                        increment("braces");
                        const t = {
                            type: "brace",
                            value: G,
                            output: "(",
                            outputIndex: m.output.length,
                            tokensIndex: m.tokens.length
                        };
                        N.push(t);
                        push(t);
                        continue;
                    }
                    if (G === "}") {
                        const t = N[N.length - 1];
                        if (u.nobrace === true || !t) {
                            push({
                                type: "text",
                                value: G,
                                output: G
                            });
                            continue;
                        }
                        let e = ")";
                        if (t.dots === true) {
                            const t = A.slice();
                            const n = [];
                            for(let e = t.length - 1; e >= 0; e--){
                                A.pop();
                                if (t[e].type === "brace") {
                                    break;
                                }
                                if (t[e].type !== "dots") {
                                    n.unshift(t[e].value);
                                }
                            }
                            e = expandRange(n, u);
                            m.backtrack = true;
                        }
                        if (t.comma !== true && t.dots !== true) {
                            const u = m.output.slice(0, t.outputIndex);
                            const n = m.tokens.slice(t.tokensIndex);
                            t.value = t.output = "\\{";
                            G = e = "\\}";
                            m.output = u;
                            for (const t of n){
                                m.output += t.output || t.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: G,
                            output: e
                        });
                        decrement("braces");
                        N.pop();
                        continue;
                    }
                    if (G === "|") {
                        if (w.length > 0) {
                            w[w.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G === ",") {
                        let t = G;
                        const e = N[N.length - 1];
                        if (e && I[I.length - 1] === "braces") {
                            e.comma = true;
                            t = "|";
                        }
                        push({
                            type: "comma",
                            value: G,
                            output: t
                        });
                        continue;
                    }
                    if (G === "/") {
                        if (B.type === "dot" && m.index === m.start + 1) {
                            m.start = m.index + 1;
                            m.consumed = "";
                            m.output = "";
                            A.pop();
                            B = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: G,
                            output: b
                        });
                        continue;
                    }
                    if (G === ".") {
                        if (m.braces > 0 && B.type === "dot") {
                            if (B.value === ".") B.output = h;
                            const t = N[N.length - 1];
                            B.type = "dots";
                            B.output += G;
                            B.value += G;
                            t.dots = true;
                            continue;
                        }
                        if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                            push({
                                type: "text",
                                value: G,
                                output: h
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: G,
                            output: h
                        });
                        continue;
                    }
                    if (G === "?") {
                        const t = B && B.value === "(";
                        if (!t && u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("qmark", G);
                            continue;
                        }
                        if (B && B.type === "paren") {
                            const t = D();
                            let e = G;
                            if (B.value === "(" && !/[!=<:]/.test(t) || t === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                e = `\\${G}`;
                            }
                            push({
                                type: "text",
                                value: G,
                                output: e
                            });
                            continue;
                        }
                        if (u.dot !== true && (B.type === "slash" || B.type === "bos")) {
                            push({
                                type: "qmark",
                                value: G,
                                output: v
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: G,
                            output: H
                        });
                        continue;
                    }
                    if (G === "!") {
                        if (u.noextglob !== true && D() === "(") {
                            if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                                extglobOpen("negate", G);
                                continue;
                            }
                        }
                        if (u.nonegate !== true && m.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (G === "+") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("plus", G);
                            continue;
                        }
                        if (B && B.value === "(" || u.regex === false) {
                            push({
                                type: "plus",
                                value: G,
                                output: g
                            });
                            continue;
                        }
                        if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                            push({
                                type: "plus",
                                value: G
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: g
                        });
                        continue;
                    }
                    if (G === "@") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G !== "*") {
                        if (G === "$" || G === "^") {
                            G = `\\${G}`;
                        }
                        const t = a.exec(remaining());
                        if (t) {
                            G += t[0];
                            m.index += t[0].length;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (B && (B.type === "globstar" || B.star === true)) {
                        B.type = "star";
                        B.star = true;
                        B.value += G;
                        B.output = k;
                        m.backtrack = true;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    let e = remaining();
                    if (u.noextglob !== true && /^\([^?]/.test(e)) {
                        extglobOpen("star", G);
                        continue;
                    }
                    if (B.type === "star") {
                        if (u.noglobstar === true) {
                            consume(G);
                            continue;
                        }
                        const n = B.prev;
                        const o = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const r = o && (o.type === "star" || o.type === "globstar");
                        if (u.bash === true && (!s || e[0] && e[0] !== "/")) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        const a = m.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const i = w.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !a && !i) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        while(e.slice(0, 3) === "/**"){
                            const u = t[m.index + 4];
                            if (u && u !== "/") {
                                break;
                            }
                            e = e.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            B.type = "globstar";
                            B.value += G;
                            B.output = globstar(u);
                            m.output = B.output;
                            m.globstar = true;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !r && eos()) {
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = globstar(u) + (u.strictSlashes ? ")" : "|$)");
                            B.value += G;
                            m.globstar = true;
                            m.output += n.output + B.output;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && e[0] === "/") {
                            const t = e[1] !== void 0 ? "|$" : "";
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = `${globstar(u)}${b}|${b}${t})`;
                            B.value += G;
                            m.output += n.output + B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && e[0] === "/") {
                            B.type = "globstar";
                            B.value += G;
                            B.output = `(?:^|${b}|${globstar(u)}${b})`;
                            m.output = B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        m.output = m.output.slice(0, -B.output.length);
                        B.type = "globstar";
                        B.output = globstar(u);
                        B.value += G;
                        m.output += B.output;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: G,
                        output: k
                    };
                    if (u.bash === true) {
                        n.output = ".*?";
                        if (B.type === "bos" || B.type === "slash") {
                            n.output = T + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (B && (B.type === "bracket" || B.type === "paren") && u.regex === true) {
                        n.output = G;
                        push(n);
                        continue;
                    }
                    if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                        if (B.type === "dot") {
                            m.output += x;
                            B.output += x;
                        } else if (u.dot === true) {
                            m.output += S;
                            B.output += S;
                        } else {
                            m.output += T;
                            B.output += T;
                        }
                        if (D() !== "*") {
                            m.output += C;
                            B.output += C;
                        }
                    }
                    push(n);
                }
                while(m.brackets > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    m.output = o.escapeLast(m.output, "[");
                    decrement("brackets");
                }
                while(m.parens > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    m.output = o.escapeLast(m.output, "(");
                    decrement("parens");
                }
                while(m.braces > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    m.output = o.escapeLast(m.output, "{");
                    decrement("braces");
                }
                if (u.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: `${b}?`
                    });
                }
                if (m.backtrack === true) {
                    m.output = "";
                    for (const t of m.tokens){
                        m.output += t.output != null ? t.output : t.value;
                        if (t.suffix) {
                            m.output += t.suffix;
                        }
                    }
                }
                return m;
            };
            parse.fastpaths = (t, e)=>{
                const u = {
                    ...e
                };
                const r = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                const a = t.length;
                if (a > r) {
                    throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${r}`);
                }
                t = c[t] || t;
                const { DOT_LITERAL: i, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u.windows);
                const g = u.dot ? _ : A;
                const b = u.dot ? R : A;
                const C = u.capture ? "" : "?:";
                const y = {
                    negated: false,
                    prefix: ""
                };
                let $ = u.bash === true ? ".*?" : E;
                if (u.capture) {
                    $ = `(${$})`;
                }
                const globstar = (t)=>{
                    if (t.noglobstar === true) return $;
                    return `(${C}(?:(?!${h}${t.dot ? f : i}).)*?)`;
                };
                const create = (t)=>{
                    switch(t){
                        case "*":
                            return `${g}${l}${$}`;
                        case ".*":
                            return `${i}${l}${$}`;
                        case "*.*":
                            return `${g}${$}${i}${l}${$}`;
                        case "*/*":
                            return `${g}${$}${p}${l}${b}${$}`;
                        case "**":
                            return g + globstar(u);
                        case "**/*":
                            return `(?:${g}${globstar(u)}${p})?${b}${l}${$}`;
                        case "**/*.*":
                            return `(?:${g}${globstar(u)}${p})?${b}${$}${i}${l}${$}`;
                        case "**/.*":
                            return `(?:${g}${globstar(u)}${p})?${i}${l}${$}`;
                        default:
                            {
                                const e = /^(.*?)\.(\w+)$/.exec(t);
                                if (!e) return;
                                const u = create(e[1]);
                                if (!u) return;
                                return u + i + e[2];
                            }
                    }
                };
                const x = o.removePrefix(t, y);
                let S = create(x);
                if (S && u.strictSlashes !== true) {
                    S += `${p}?`;
                }
                return S;
            };
            t.exports = parse;
        },
        510: (t, e, u)=>{
            const n = u(716);
            const o = u(697);
            const s = u(96);
            const r = u(154);
            const isObject = (t)=>t && typeof t === "object" && !Array.isArray(t);
            const picomatch = (t, e, u = false)=>{
                if (Array.isArray(t)) {
                    const n = t.map((t)=>picomatch(t, e, u));
                    const arrayMatcher = (t)=>{
                        for (const e of n){
                            const u = e(t);
                            if (u) return u;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(t) && t.tokens && t.input;
                if (t === "" || typeof t !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const o = e || {};
                const s = o.windows;
                const r = n ? picomatch.compileRe(t, e) : picomatch.makeRe(t, e, false, true);
                const a = r.state;
                delete r.state;
                let isIgnored = ()=>false;
                if (o.ignore) {
                    const t = {
                        ...e,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(o.ignore, t, u);
                }
                const matcher = (u, n = false)=>{
                    const { isMatch: i, match: c, output: p } = picomatch.test(u, r, e, {
                        glob: t,
                        posix: s
                    });
                    const l = {
                        glob: t,
                        state: a,
                        regex: r,
                        posix: s,
                        input: u,
                        output: p,
                        match: c,
                        isMatch: i
                    };
                    if (typeof o.onResult === "function") {
                        o.onResult(l);
                    }
                    if (i === false) {
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (isIgnored(u)) {
                        if (typeof o.onIgnore === "function") {
                            o.onIgnore(l);
                        }
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (typeof o.onMatch === "function") {
                        o.onMatch(l);
                    }
                    return n ? l : true;
                };
                if (u) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = (t, e, u, { glob: n, posix: o } = {})=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (t === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const r = u || {};
                const a = r.format || (o ? s.toPosixSlashes : null);
                let i = t === n;
                let c = i && a ? a(t) : t;
                if (i === false) {
                    c = a ? a(t) : t;
                    i = c === n;
                }
                if (i === false || r.capture === true) {
                    if (r.matchBase === true || r.basename === true) {
                        i = picomatch.matchBase(t, e, u, o);
                    } else {
                        i = e.exec(c);
                    }
                }
                return {
                    isMatch: Boolean(i),
                    match: i,
                    output: c
                };
            };
            picomatch.matchBase = (t, e, u)=>{
                const n = e instanceof RegExp ? e : picomatch.makeRe(e, u);
                return n.test(s.basename(t));
            };
            picomatch.isMatch = (t, e, u)=>picomatch(e, u)(t);
            picomatch.parse = (t, e)=>{
                if (Array.isArray(t)) return t.map((t)=>picomatch.parse(t, e));
                return o(t, {
                    ...e,
                    fastpaths: false
                });
            };
            picomatch.scan = (t, e)=>n(t, e);
            picomatch.compileRe = (t, e, u = false, n = false)=>{
                if (u === true) {
                    return t.output;
                }
                const o = e || {};
                const s = o.contains ? "" : "^";
                const r = o.contains ? "" : "$";
                let a = `${s}(?:${t.output})${r}`;
                if (t && t.negated === true) {
                    a = `^(?!${a}).*$`;
                }
                const i = picomatch.toRegex(a, e);
                if (n === true) {
                    i.state = t;
                }
                return i;
            };
            picomatch.makeRe = (t, e = {}, u = false, n = false)=>{
                if (!t || typeof t !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                let s = {
                    negated: false,
                    fastpaths: true
                };
                if (e.fastpaths !== false && (t[0] === "." || t[0] === "*")) {
                    s.output = o.fastpaths(t, e);
                }
                if (!s.output) {
                    s = o(t, e);
                }
                return picomatch.compileRe(s, e, u, n);
            };
            picomatch.toRegex = (t, e)=>{
                try {
                    const u = e || {};
                    return new RegExp(t, u.flags || (u.nocase ? "i" : ""));
                } catch (t) {
                    if (e && e.debug === true) throw t;
                    return /$^/;
                }
            };
            picomatch.constants = r;
            t.exports = picomatch;
        },
        716: (t, e, u)=>{
            const n = u(96);
            const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u(154);
            const isPathSeparator = (t)=>t === p || t === r;
            const depth = (t)=>{
                if (t.isPrefix !== true) {
                    t.depth = t.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (t, e)=>{
                const u = e || {};
                const b = t.length - 1;
                const C = u.parts === true || u.scanToEnd === true;
                const y = [];
                const $ = [];
                const x = [];
                let S = t;
                let H = -1;
                let v = 0;
                let d = 0;
                let L = false;
                let T = false;
                let O = false;
                let k = false;
                let m = false;
                let w = false;
                let N = false;
                let I = false;
                let B = false;
                let G = false;
                let D = 0;
                let M;
                let P;
                let K = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= b;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    M = P;
                    return S.charCodeAt(++H);
                };
                while(H < b){
                    P = advance();
                    let t;
                    if (P === r) {
                        N = K.backslashes = true;
                        P = advance();
                        if (P === l) {
                            w = true;
                        }
                        continue;
                    }
                    if (w === true || P === l) {
                        D++;
                        while(eos() !== true && (P = advance())){
                            if (P === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (P === l) {
                                D++;
                                continue;
                            }
                            if (w !== true && P === i && (P = advance()) === i) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (w !== true && P === a) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (P === E) {
                                D--;
                                if (D === 0) {
                                    w = false;
                                    L = K.isBrace = true;
                                    G = true;
                                    break;
                                }
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === p) {
                        y.push(H);
                        $.push(K);
                        K = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (G === true) continue;
                        if (M === i && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        d = H + 1;
                        continue;
                    }
                    if (u.noext !== true) {
                        const t = P === _ || P === s || P === o || P === R || P === c;
                        if (t === true && peek() === f) {
                            O = K.isGlob = true;
                            k = K.isExtglob = true;
                            G = true;
                            if (P === c && H === v) {
                                B = true;
                            }
                            if (C === true) {
                                while(eos() !== true && (P = advance())){
                                    if (P === r) {
                                        N = K.backslashes = true;
                                        P = advance();
                                        continue;
                                    }
                                    if (P === h) {
                                        O = K.isGlob = true;
                                        G = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (P === o) {
                        if (M === o) m = K.isGlobstar = true;
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === R) {
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === A) {
                        while(eos() !== true && (t = advance())){
                            if (t === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (t === g) {
                                T = K.isBracket = true;
                                O = K.isGlob = true;
                                G = true;
                                break;
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (u.nonegate !== true && P === c && H === v) {
                        I = K.negated = true;
                        v++;
                        continue;
                    }
                    if (u.noparen !== true && P === f) {
                        O = K.isGlob = true;
                        if (C === true) {
                            while(eos() !== true && (P = advance())){
                                if (P === f) {
                                    N = K.backslashes = true;
                                    P = advance();
                                    continue;
                                }
                                if (P === h) {
                                    G = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (O === true) {
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (u.noext === true) {
                    k = false;
                    O = false;
                }
                let U = S;
                let X = "";
                let F = "";
                if (v > 0) {
                    X = S.slice(0, v);
                    S = S.slice(v);
                    d -= v;
                }
                if (U && O === true && d > 0) {
                    U = S.slice(0, d);
                    F = S.slice(d);
                } else if (O === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (u.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && N === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: X,
                    input: t,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: L,
                    isBracket: T,
                    isGlob: O,
                    isExtglob: k,
                    isGlobstar: m,
                    negated: I,
                    negatedExtglob: B
                };
                if (u.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(P)) {
                        $.push(K);
                    }
                    Q.tokens = $;
                }
                if (u.parts === true || u.tokens === true) {
                    let e;
                    for(let n = 0; n < y.length; n++){
                        const o = e ? e + 1 : v;
                        const s = y[n];
                        const r = t.slice(o, s);
                        if (u.tokens) {
                            if (n === 0 && v !== 0) {
                                $[n].isPrefix = true;
                                $[n].value = X;
                            } else {
                                $[n].value = r;
                            }
                            depth($[n]);
                            Q.maxDepth += $[n].depth;
                        }
                        if (n !== 0 || r !== "") {
                            x.push(r);
                        }
                        e = s;
                    }
                    if (e && e + 1 < t.length) {
                        const n = t.slice(e + 1);
                        x.push(n);
                        if (u.tokens) {
                            $[$.length - 1].value = n;
                            depth($[$.length - 1]);
                            Q.maxDepth += $[$.length - 1].depth;
                        }
                    }
                    Q.slashes = y;
                    Q.parts = x;
                }
                return Q;
            };
            t.exports = scan;
        },
        96: (t, e, u)=>{
            const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u(154);
            e.isObject = (t)=>t !== null && typeof t === "object" && !Array.isArray(t);
            e.hasRegexChars = (t)=>s.test(t);
            e.isRegexChar = (t)=>t.length === 1 && e.hasRegexChars(t);
            e.escapeRegex = (t)=>t.replace(r, "\\$1");
            e.toPosixSlashes = (t)=>t.replace(n, "/");
            e.removeBackslashes = (t)=>t.replace(o, (t)=>t === "\\" ? "" : t);
            e.escapeLast = (t, u, n)=>{
                const o = t.lastIndexOf(u, n);
                if (o === -1) return t;
                if (t[o - 1] === "\\") return e.escapeLast(t, u, o - 1);
                return `${t.slice(0, o)}\\${t.slice(o)}`;
            };
            e.removePrefix = (t, e = {})=>{
                let u = t;
                if (u.startsWith("./")) {
                    u = u.slice(2);
                    e.prefix = "./";
                }
                return u;
            };
            e.wrapOutput = (t, e = {}, u = {})=>{
                const n = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let s = `${n}(?:${t})${o}`;
                if (e.negated === true) {
                    s = `(?:^(?!${s}).*$)`;
                }
                return s;
            };
            e.basename = (t, { windows: e } = {})=>{
                const u = t.split(e ? /[\\/]/ : "/");
                const n = u[u.length - 1];
                if (n === "") {
                    return u[u.length - 2];
                }
                return n;
            };
        }
    };
    var e = {};
    function __nccwpck_require__(u) {
        var n = e[u];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[u] = {
            exports: {}
        };
        var s = true;
        try {
            t[u](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[u];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/client/node_modules/next/dist/compiled/picomatch") + "/";
    var u = __nccwpck_require__(170);
    module.exports = u;
})();
}),
"[project]/client/node_modules/next/dist/shared/lib/match-local-pattern.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/picomatch/index.js [app-rsc] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/picomatch/index.js [app-rsc] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        if (pattern.protocol.replace(/:$/, '') !== url.protocol.replace(/:$/, '')) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw Object.defineProperty(new Error(`Pattern should define hostname but found\n${JSON.stringify(pattern)}`), "__NEXT_ERROR_CODE", {
            value: "E410",
            enumerable: false,
            configurable: true
        });
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/image-loader.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _findclosestquality = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/find-closest-quality.js [app-rsc] (ecmascript)");
function defaultLoader({ config, src, width, quality }) {
    if (src.startsWith('/') && src.includes('?') && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === '**' && config.localPatterns[0].search === '') {
        throw Object.defineProperty(new Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push('src');
        if (!width) missingValues.push('width');
        if (missingValues.length > 0) {
            throw Object.defineProperty(new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
                src,
                width,
                quality
            })}`), "__NEXT_ERROR_CODE", {
                value: "E188",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('//')) {
            throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                value: "E360",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('/') && config.localPatterns) {
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasLocalMatch } = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/match-local-pattern.js [app-rsc] (ecmascript)");
                if (!hasLocalMatch(config.localPatterns, src)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                        value: "E426",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                    value: "E63",
                    enumerable: false,
                    configurable: true
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasRemoteMatch } = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-rsc] (ecmascript)");
                if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                        value: "E231",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const q = (0, _findclosestquality.findClosestQuality)(quality, config);
    return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith('/_next/static/media/') && ("TURBOPACK compile-time value", false) ? "TURBOPACK unreachable" : ''}`;
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/image-external.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/client/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-rsc] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/get-img-props.js [app-rsc] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/client/node_modules/next/dist/client/image-component.js [app-rsc] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-loader.js [app-rsc] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", []),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/client/node_modules/next/image.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-external.js [app-rsc] (ecmascript)");
}),
"[project]/client/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/client/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
}),
"[project]/client/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/client/node_modules/next/dist/client/app-dir/link.js"));
}),
"[project]/client/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/client/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return _link.useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/client/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
const _link = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/client/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)"));
function LinkComponent(props) {
    const isLegacyBehavior = props.legacyBehavior;
    const childIsHostComponent = typeof props.children === 'string' || typeof props.children === 'number' || typeof props.children?.type === 'string';
    const childIsClientComponent = props.children?.type?.$$typeof === Symbol.for('react.client.reference');
    if (isLegacyBehavior && !childIsHostComponent && !childIsClientComponent) {
        if (props.children?.type?.$$typeof === Symbol.for('react.lazy')) {
            console.error(`Using a Lazy Component as a direct child of \`<Link legacyBehavior>\` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's \`<a>\` tag.`);
        } else {
            console.error(`Using a Server Component as a direct child of \`<Link legacyBehavior>\` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's \`<a>\` tag.`);
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
        ...props
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.react-server.js.map
}),
"[project]/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
"[project]/client/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/client/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/client/node_modules/delayed-stream/lib/delayed_stream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
module.exports = DelayedStream;
function DelayedStream() {
    this.source = null;
    this.dataSize = 0;
    this.maxDataSize = 1024 * 1024;
    this.pauseStream = true;
    this._maxDataSizeExceeded = false;
    this._released = false;
    this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);
DelayedStream.create = function(source, options) {
    var delayedStream = new this();
    options = options || {};
    for(var option in options){
        delayedStream[option] = options[option];
    }
    delayedStream.source = source;
    var realEmit = source.emit;
    source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
    };
    source.on('error', function() {});
    if (delayedStream.pauseStream) {
        source.pause();
    }
    return delayedStream;
};
Object.defineProperty(DelayedStream.prototype, 'readable', {
    configurable: true,
    enumerable: true,
    get: function() {
        return this.source.readable;
    }
});
DelayedStream.prototype.setEncoding = function() {
    return this.source.setEncoding.apply(this.source, arguments);
};
DelayedStream.prototype.resume = function() {
    if (!this._released) {
        this.release();
    }
    this.source.resume();
};
DelayedStream.prototype.pause = function() {
    this.source.pause();
};
DelayedStream.prototype.release = function() {
    this._released = true;
    this._bufferedEvents.forEach((function(args) {
        this.emit.apply(this, args);
    }).bind(this));
    this._bufferedEvents = [];
};
DelayedStream.prototype.pipe = function() {
    var r = Stream.prototype.pipe.apply(this, arguments);
    this.resume();
    return r;
};
DelayedStream.prototype._handleEmit = function(args) {
    if (this._released) {
        this.emit.apply(this, args);
        return;
    }
    if (args[0] === 'data') {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
    }
    this._bufferedEvents.push(args);
};
DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
    if (this._maxDataSizeExceeded) {
        return;
    }
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    this._maxDataSizeExceeded = true;
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this.emit('error', new Error(message));
};
}),
"[project]/client/node_modules/combined-stream/lib/combined_stream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var DelayedStream = __turbopack_context__.r("[project]/client/node_modules/delayed-stream/lib/delayed_stream.js [app-rsc] (ecmascript)");
module.exports = CombinedStream;
function CombinedStream() {
    this.writable = false;
    this.readable = true;
    this.dataSize = 0;
    this.maxDataSize = 2 * 1024 * 1024;
    this.pauseStreams = true;
    this._released = false;
    this._streams = [];
    this._currentStream = null;
    this._insideLoop = false;
    this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);
CombinedStream.create = function(options) {
    var combinedStream = new this();
    options = options || {};
    for(var option in options){
        combinedStream[option] = options[option];
    }
    return combinedStream;
};
CombinedStream.isStreamLike = function(stream) {
    return typeof stream !== 'function' && typeof stream !== 'string' && typeof stream !== 'boolean' && typeof stream !== 'number' && !Buffer.isBuffer(stream);
};
CombinedStream.prototype.append = function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
            var newStream = DelayedStream.create(stream, {
                maxDataSize: Infinity,
                pauseStream: this.pauseStreams
            });
            stream.on('data', this._checkDataSize.bind(this));
            stream = newStream;
        }
        this._handleErrors(stream);
        if (this.pauseStreams) {
            stream.pause();
        }
    }
    this._streams.push(stream);
    return this;
};
CombinedStream.prototype.pipe = function(dest, options) {
    Stream.prototype.pipe.call(this, dest, options);
    this.resume();
    return dest;
};
CombinedStream.prototype._getNext = function() {
    this._currentStream = null;
    if (this._insideLoop) {
        this._pendingNext = true;
        return; // defer call
    }
    this._insideLoop = true;
    try {
        do {
            this._pendingNext = false;
            this._realGetNext();
        }while (this._pendingNext)
    } finally{
        this._insideLoop = false;
    }
};
CombinedStream.prototype._realGetNext = function() {
    var stream = this._streams.shift();
    if (typeof stream == 'undefined') {
        this.end();
        return;
    }
    if (typeof stream !== 'function') {
        this._pipeNext(stream);
        return;
    }
    var getStream = stream;
    getStream((function(stream) {
        var isStreamLike = CombinedStream.isStreamLike(stream);
        if (isStreamLike) {
            stream.on('data', this._checkDataSize.bind(this));
            this._handleErrors(stream);
        }
        this._pipeNext(stream);
    }).bind(this));
};
CombinedStream.prototype._pipeNext = function(stream) {
    this._currentStream = stream;
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        stream.on('end', this._getNext.bind(this));
        stream.pipe(this, {
            end: false
        });
        return;
    }
    var value = stream;
    this.write(value);
    this._getNext();
};
CombinedStream.prototype._handleErrors = function(stream) {
    var self = this;
    stream.on('error', function(err) {
        self._emitError(err);
    });
};
CombinedStream.prototype.write = function(data) {
    this.emit('data', data);
};
CombinedStream.prototype.pause = function() {
    if (!this.pauseStreams) {
        return;
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == 'function') this._currentStream.pause();
    this.emit('pause');
};
CombinedStream.prototype.resume = function() {
    if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == 'function') this._currentStream.resume();
    this.emit('resume');
};
CombinedStream.prototype.end = function() {
    this._reset();
    this.emit('end');
};
CombinedStream.prototype.destroy = function() {
    this._reset();
    this.emit('close');
};
CombinedStream.prototype._reset = function() {
    this.writable = false;
    this._streams = [];
    this._currentStream = null;
};
CombinedStream.prototype._checkDataSize = function() {
    this._updateDataSize();
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this._emitError(new Error(message));
};
CombinedStream.prototype._updateDataSize = function() {
    this.dataSize = 0;
    var self = this;
    this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
            return;
        }
        self.dataSize += stream.dataSize;
    });
    if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
    }
};
CombinedStream.prototype._emitError = function(err) {
    this._reset();
    this.emit('error', err);
};
}),
"[project]/client/node_modules/mime-types/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module dependencies.
 * @private
 */ var db = __turbopack_context__.r("[project]/client/node_modules/mime-db/index.js [app-rsc] (ecmascript)");
var extname = __turbopack_context__.r("[externals]/path [external] (path, cjs)").extname;
/**
 * Module variables.
 * @private
 */ var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
var TEXT_TYPE_REGEXP = /^text\//i;
/**
 * Module exports.
 * @public
 */ exports.charset = charset;
exports.charsets = {
    lookup: charset
};
exports.contentType = contentType;
exports.extension = extension;
exports.extensions = Object.create(null);
exports.lookup = lookup;
exports.types = Object.create(null);
// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types);
/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function charset(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    var mime = match && db[match[1].toLowerCase()];
    if (mime && mime.charset) {
        return mime.charset;
    }
    // default text/* to utf-8
    if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return 'UTF-8';
    }
    return false;
}
/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */ function contentType(str) {
    // TODO: should this even be in this module?
    if (!str || typeof str !== 'string') {
        return false;
    }
    var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str;
    if (!mime) {
        return false;
    }
    // TODO: use content-type or other module
    if (mime.indexOf('charset') === -1) {
        var charset = exports.charset(mime);
        if (charset) mime += '; charset=' + charset.toLowerCase();
    }
    return mime;
}
/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function extension(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    // get extensions
    var exts = match && exports.extensions[match[1].toLowerCase()];
    if (!exts || !exts.length) {
        return false;
    }
    return exts[0];
}
/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */ function lookup(path) {
    if (!path || typeof path !== 'string') {
        return false;
    }
    // get the extension ("ext" or ".ext" or full path)
    var extension = extname('x.' + path).toLowerCase().substr(1);
    if (!extension) {
        return false;
    }
    return exports.types[extension] || false;
}
/**
 * Populate the extensions and types maps.
 * @private
 */ function populateMaps(extensions, types) {
    // source preference (least -> most)
    var preference = [
        'nginx',
        'apache',
        undefined,
        'iana'
    ];
    Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
            return;
        }
        // mime -> extensions
        extensions[type] = exts;
        // extension -> mime
        for(var i = 0; i < exts.length; i++){
            var extension = exts[i];
            if (types[extension]) {
                var from = preference.indexOf(db[types[extension]].source);
                var to = preference.indexOf(mime.source);
                if (types[extension] !== 'application/octet-stream' && (from > to || from === to && types[extension].substr(0, 12) === 'application/')) {
                    continue;
                }
            }
            // set the extension -> mime
            types[extension] = type;
        }
    });
}
}),
"[project]/client/node_modules/asynckit/lib/defer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = defer;
/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */ function defer(fn) {
    var nextTick = typeof setImmediate == 'function' ? setImmediate : typeof process == 'object' && typeof process.nextTick == 'function' ? process.nextTick : null;
    if (nextTick) {
        nextTick(fn);
    } else {
        setTimeout(fn, 0);
    }
}
}),
"[project]/client/node_modules/asynckit/lib/async.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var defer = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/defer.js [app-rsc] (ecmascript)");
// API
module.exports = async;
/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */ function async(callback) {
    var isAsync = false;
    // check if async happened
    defer(function() {
        isAsync = true;
    });
    return function async_callback(err, result) {
        if (isAsync) {
            callback(err, result);
        } else {
            defer(function nextTick_callback() {
                callback(err, result);
            });
        }
    };
}
}),
"[project]/client/node_modules/asynckit/lib/abort.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = abort;
/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */ function abort(state) {
    Object.keys(state.jobs).forEach(clean.bind(state));
    // reset leftover jobs
    state.jobs = {};
}
/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */ function clean(key) {
    if (typeof this.jobs[key] == 'function') {
        this.jobs[key]();
    }
}
}),
"[project]/client/node_modules/asynckit/lib/iterate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var async = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/async.js [app-rsc] (ecmascript)"), abort = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/abort.js [app-rsc] (ecmascript)");
// API
module.exports = iterate;
/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */ function iterate(list, iterator, state, callback) {
    // store current index
    var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;
    state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        // don't repeat yourself
        // skip secondary callbacks
        if (!(key in state.jobs)) {
            return;
        }
        // clean up jobs
        delete state.jobs[key];
        if (error) {
            // don't process rest of the results
            // stop still active jobs
            // and reset the list
            abort(state);
        } else {
            state.results[key] = output;
        }
        // return salvaged results
        callback(error, state.results);
    });
}
/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */ function runJob(iterator, key, item, callback) {
    var aborter;
    // allow shortcut if iterator expects only two arguments
    if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
    } else {
        aborter = iterator(item, key, async(callback));
    }
    return aborter;
}
}),
"[project]/client/node_modules/asynckit/lib/state.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = state;
/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */ function state(list, sortMethod) {
    var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
    };
    if (sortMethod) {
        // sort array keys based on it's values
        // sort object's keys just on own merit
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
            return sortMethod(list[a], list[b]);
        });
    }
    return initState;
}
}),
"[project]/client/node_modules/asynckit/lib/terminator.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var abort = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/abort.js [app-rsc] (ecmascript)"), async = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/async.js [app-rsc] (ecmascript)");
// API
module.exports = terminator;
/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */ function terminator(callback) {
    if (!Object.keys(this.jobs).length) {
        return;
    }
    // fast forward iteration index
    this.index = this.size;
    // abort jobs
    abort(this);
    // send back results we have so far
    async(callback)(null, this.results);
}
}),
"[project]/client/node_modules/asynckit/parallel.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/iterate.js [app-rsc] (ecmascript)"), initState = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/state.js [app-rsc] (ecmascript)"), terminator = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/terminator.js [app-rsc] (ecmascript)");
// Public API
module.exports = parallel;
/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function parallel(list, iterator, callback) {
    var state = initState(list);
    while(state.index < (state['keyedList'] || list).length){
        iterate(list, iterator, state, function(error, result) {
            if (error) {
                callback(error, result);
                return;
            }
            // looks like it's the last one
            if (Object.keys(state.jobs).length === 0) {
                callback(null, state.results);
                return;
            }
        });
        state.index++;
    }
    return terminator.bind(state, callback);
}
}),
"[project]/client/node_modules/asynckit/serialOrdered.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/iterate.js [app-rsc] (ecmascript)"), initState = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/state.js [app-rsc] (ecmascript)"), terminator = __turbopack_context__.r("[project]/client/node_modules/asynckit/lib/terminator.js [app-rsc] (ecmascript)");
// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending = ascending;
module.exports.descending = descending;
/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serialOrdered(list, iterator, sortMethod, callback) {
    var state = initState(list, sortMethod);
    iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
            callback(error, result);
            return;
        }
        state.index++;
        // are we there yet?
        if (state.index < (state['keyedList'] || list).length) {
            iterate(list, iterator, state, iteratorHandler);
            return;
        }
        // done here
        callback(null, state.results);
    });
    return terminator.bind(state, callback);
}
/*
 * -- Sort methods
 */ /**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function descending(a, b) {
    return -1 * ascending(a, b);
}
}),
"[project]/client/node_modules/asynckit/serial.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var serialOrdered = __turbopack_context__.r("[project]/client/node_modules/asynckit/serialOrdered.js [app-rsc] (ecmascript)");
// Public API
module.exports = serial;
/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serial(list, iterator, callback) {
    return serialOrdered(list, iterator, null, callback);
}
}),
"[project]/client/node_modules/asynckit/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    parallel: __turbopack_context__.r("[project]/client/node_modules/asynckit/parallel.js [app-rsc] (ecmascript)"),
    serial: __turbopack_context__.r("[project]/client/node_modules/asynckit/serial.js [app-rsc] (ecmascript)"),
    serialOrdered: __turbopack_context__.r("[project]/client/node_modules/asynckit/serialOrdered.js [app-rsc] (ecmascript)")
};
}),
"[project]/client/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/client/node_modules/es-errors/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/client/node_modules/es-errors/eval.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/client/node_modules/es-errors/range.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/client/node_modules/es-errors/ref.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/client/node_modules/es-errors/syntax.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/client/node_modules/es-errors/type.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/client/node_modules/es-errors/uri.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/client/node_modules/math-intrinsics/abs.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/client/node_modules/math-intrinsics/floor.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/client/node_modules/math-intrinsics/max.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/client/node_modules/math-intrinsics/min.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/client/node_modules/math-intrinsics/pow.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/client/node_modules/math-intrinsics/round.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/client/node_modules/math-intrinsics/isNaN.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/client/node_modules/math-intrinsics/sign.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/client/node_modules/math-intrinsics/isNaN.js [app-rsc] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/client/node_modules/gopd/gOPD.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/client/node_modules/gopd/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/client/node_modules/gopd/gOPD.js [app-rsc] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/client/node_modules/es-define-property/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/client/node_modules/has-symbols/shams.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/client/node_modules/has-symbols/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/client/node_modules/has-symbols/shams.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/client/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/client/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/client/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/client/node_modules/get-proto/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/client/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/client/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/client/node_modules/dunder-proto/get.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/client/node_modules/function-bind/implementation.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/client/node_modules/function-bind/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/client/node_modules/function-bind/implementation.js [app-rsc] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/client/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/client/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/client/node_modules/call-bind-apply-helpers/reflectApply.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/client/node_modules/call-bind-apply-helpers/actualApply.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/client/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/client/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/client/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/client/node_modules/call-bind-apply-helpers/reflectApply.js [app-rsc] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/client/node_modules/call-bind-apply-helpers/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/client/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/client/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/client/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/client/node_modules/call-bind-apply-helpers/actualApply.js [app-rsc] (ecmascript)");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/client/node_modules/dunder-proto/get.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/client/node_modules/call-bind-apply-helpers/index.js [app-rsc] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/client/node_modules/gopd/index.js [app-rsc] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/client/node_modules/hasown/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/client/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/client/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/client/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/client/node_modules/es-errors/index.js [app-rsc] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/client/node_modules/es-errors/eval.js [app-rsc] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/client/node_modules/es-errors/range.js [app-rsc] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/client/node_modules/es-errors/ref.js [app-rsc] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/client/node_modules/es-errors/syntax.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/client/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/client/node_modules/es-errors/uri.js [app-rsc] (ecmascript)");
var abs = __turbopack_context__.r("[project]/client/node_modules/math-intrinsics/abs.js [app-rsc] (ecmascript)");
var floor = __turbopack_context__.r("[project]/client/node_modules/math-intrinsics/floor.js [app-rsc] (ecmascript)");
var max = __turbopack_context__.r("[project]/client/node_modules/math-intrinsics/max.js [app-rsc] (ecmascript)");
var min = __turbopack_context__.r("[project]/client/node_modules/math-intrinsics/min.js [app-rsc] (ecmascript)");
var pow = __turbopack_context__.r("[project]/client/node_modules/math-intrinsics/pow.js [app-rsc] (ecmascript)");
var round = __turbopack_context__.r("[project]/client/node_modules/math-intrinsics/round.js [app-rsc] (ecmascript)");
var sign = __turbopack_context__.r("[project]/client/node_modules/math-intrinsics/sign.js [app-rsc] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/client/node_modules/gopd/index.js [app-rsc] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/client/node_modules/es-define-property/index.js [app-rsc] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/client/node_modules/has-symbols/index.js [app-rsc] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/client/node_modules/get-proto/index.js [app-rsc] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/client/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/client/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/client/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/client/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/client/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/client/node_modules/hasown/index.js [app-rsc] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/client/node_modules/has-tostringtag/shams.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasSymbols = __turbopack_context__.r("[project]/client/node_modules/has-symbols/shams.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};
}),
"[project]/client/node_modules/es-set-tostringtag/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/client/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)");
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasToStringTag = __turbopack_context__.r("[project]/client/node_modules/has-tostringtag/shams.js [app-rsc] (ecmascript)")();
var hasOwn = __turbopack_context__.r("[project]/client/node_modules/hasown/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/client/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var toStringTag = hasToStringTag ? Symbol.toStringTag : null;
/** @type {import('.')} */ module.exports = function setToStringTag(object, value) {
    var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
    var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if (typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean' || typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean') {
        throw new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');
    }
    if (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {
        if ($defineProperty) {
            $defineProperty(object, toStringTag, {
                configurable: !nonConfigurable,
                enumerable: false,
                value: value,
                writable: false
            });
        } else {
            object[toStringTag] = value; // eslint-disable-line no-param-reassign
        }
    }
};
}),
"[project]/client/node_modules/form-data/lib/populate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// populates missing values
module.exports = function(dst, src) {
    Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop]; // eslint-disable-line no-param-reassign
    });
    return dst;
};
}),
"[project]/client/node_modules/form-data/lib/form_data.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var CombinedStream = __turbopack_context__.r("[project]/client/node_modules/combined-stream/lib/combined_stream.js [app-rsc] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var mime = __turbopack_context__.r("[project]/client/node_modules/mime-types/index.js [app-rsc] (ecmascript)");
var asynckit = __turbopack_context__.r("[project]/client/node_modules/asynckit/index.js [app-rsc] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/client/node_modules/es-set-tostringtag/index.js [app-rsc] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/client/node_modules/hasown/index.js [app-rsc] (ecmascript)");
var populate = __turbopack_context__.r("[project]/client/node_modules/form-data/lib/populate.js [app-rsc] (ecmascript)");
/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {object} options - Properties to be added/overriden for FormData and CombinedStream
 */ function FormData(options) {
    if (!(this instanceof FormData)) {
        return new FormData(options);
    }
    this._overheadLength = 0;
    this._valueLength = 0;
    this._valuesToMeasure = [];
    CombinedStream.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    for(var option in options){
        this[option] = options[option];
    }
}
// make it a Stream
util.inherits(FormData, CombinedStream);
FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';
FormData.prototype.append = function(field, value, options) {
    options = options || {}; // eslint-disable-line no-param-reassign
    // allow filename as single option
    if (typeof options === 'string') {
        options = {
            filename: options
        }; // eslint-disable-line no-param-reassign
    }
    var append = CombinedStream.prototype.append.bind(this);
    // all that streamy business can't handle numbers
    if (typeof value === 'number' || value == null) {
        value = String(value); // eslint-disable-line no-param-reassign
    }
    // https://github.com/felixge/node-form-data/issues/38
    if (Array.isArray(value)) {
        /*
     * Please convert your array into string
     * the way web server expects it
     */ this._error(new Error('Arrays are not supported.'));
        return;
    }
    var header = this._multiPartHeader(field, value, options);
    var footer = this._multiPartFooter();
    append(header);
    append(value);
    append(footer);
    // pass along options.knownLength
    this._trackLength(header, value, options);
};
FormData.prototype._trackLength = function(header, value, options) {
    var valueLength = 0;
    /*
   * used w/ getLengthSync(), when length is known.
   * e.g. for streaming directly from a remote server,
   * w/ a known file a size, and not wanting to wait for
   * incoming file to finish to get its size.
   */ if (options.knownLength != null) {
        valueLength += Number(options.knownLength);
    } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
    } else if (typeof value === 'string') {
        valueLength = Buffer.byteLength(value);
    }
    this._valueLength += valueLength;
    // @check why add CRLF? does this account for custom/multiple CRLFs?
    this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;
    // empty or either doesn't have path or not an http response or not a stream
    if (!value || !value.path && !(value.readable && hasOwn(value, 'httpVersion')) && !(value instanceof Stream)) {
        return;
    }
    // no need to bother with the length
    if (!options.knownLength) {
        this._valuesToMeasure.push(value);
    }
};
FormData.prototype._lengthRetriever = function(value, callback) {
    if (hasOwn(value, 'fd')) {
        // take read range into a account
        // `end` = Infinity –> read file till the end
        //
        // TODO: Looks like there is bug in Node fs.createReadStream
        // it doesn't respect `end` options without `start` options
        // Fix it when node fixes it.
        // https://github.com/joyent/node/issues/7819
        if (value.end != undefined && value.end != Infinity && value.start != undefined) {
            // when end specified
            // no need to calculate range
            // inclusive, starts with 0
            callback(null, value.end + 1 - (value.start ? value.start : 0)); // eslint-disable-line callback-return
        // not that fast snoopy
        } else {
            // still need to fetch file size from fs
            fs.stat(value.path, function(err, stat) {
                if (err) {
                    callback(err);
                    return;
                }
                // update final size based on the range options
                var fileSize = stat.size - (value.start ? value.start : 0);
                callback(null, fileSize);
            });
        }
    // or http response
    } else if (hasOwn(value, 'httpVersion')) {
        callback(null, Number(value.headers['content-length'])); // eslint-disable-line callback-return
    // or request stream http://github.com/mikeal/request
    } else if (hasOwn(value, 'httpModule')) {
        // wait till response come back
        value.on('response', function(response) {
            value.pause();
            callback(null, Number(response.headers['content-length']));
        });
        value.resume();
    // something else
    } else {
        callback('Unknown stream'); // eslint-disable-line callback-return
    }
};
FormData.prototype._multiPartHeader = function(field, value, options) {
    /*
   * custom header specified (as string)?
   * it becomes responsible for boundary
   * (e.g. to handle extra CRLFs on .NET servers)
   */ if (typeof options.header === 'string') {
        return options.header;
    }
    var contentDisposition = this._getContentDisposition(value, options);
    var contentType = this._getContentType(value, options);
    var contents = '';
    var headers = {
        // add custom disposition as third element or keep it two elements if not
        'Content-Disposition': [
            'form-data',
            'name="' + field + '"'
        ].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        'Content-Type': [].concat(contentType || [])
    };
    // allow custom headers.
    if (typeof options.header === 'object') {
        populate(headers, options.header);
    }
    var header;
    for(var prop in headers){
        if (hasOwn(headers, prop)) {
            header = headers[prop];
            // skip nullish headers.
            if (header == null) {
                continue; // eslint-disable-line no-restricted-syntax, no-continue
            }
            // convert all headers to arrays.
            if (!Array.isArray(header)) {
                header = [
                    header
                ];
            }
            // add non-empty headers.
            if (header.length) {
                contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
            }
        }
    }
    return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};
FormData.prototype._getContentDisposition = function(value, options) {
    var filename;
    if (typeof options.filepath === 'string') {
        // custom filepath for relative paths
        filename = path.normalize(options.filepath).replace(/\\/g, '/');
    } else if (options.filename || value && (value.name || value.path)) {
        /*
     * custom filename take precedence
     * formidable and the browser add a name property
     * fs- and request- streams have path property
     */ filename = path.basename(options.filename || value && (value.name || value.path));
    } else if (value && value.readable && hasOwn(value, 'httpVersion')) {
        // or try http response
        filename = path.basename(value.client._httpMessage.path || '');
    }
    if (filename) {
        return 'filename="' + filename + '"';
    }
};
FormData.prototype._getContentType = function(value, options) {
    // use custom content-type above all
    var contentType = options.contentType;
    // or try `name` from formidable, browser
    if (!contentType && value && value.name) {
        contentType = mime.lookup(value.name);
    }
    // or try `path` from fs-, request- streams
    if (!contentType && value && value.path) {
        contentType = mime.lookup(value.path);
    }
    // or if it's http-reponse
    if (!contentType && value && value.readable && hasOwn(value, 'httpVersion')) {
        contentType = value.headers['content-type'];
    }
    // or guess it from the filepath or filename
    if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
    }
    // fallback to the default content type if `value` is not simple value
    if (!contentType && value && typeof value === 'object') {
        contentType = FormData.DEFAULT_CONTENT_TYPE;
    }
    return contentType;
};
FormData.prototype._multiPartFooter = function() {
    return (function(next) {
        var footer = FormData.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
            footer += this._lastBoundary();
        }
        next(footer);
    }).bind(this);
};
FormData.prototype._lastBoundary = function() {
    return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};
FormData.prototype.getHeaders = function(userHeaders) {
    var header;
    var formHeaders = {
        'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
    };
    for(header in userHeaders){
        if (hasOwn(userHeaders, header)) {
            formHeaders[header.toLowerCase()] = userHeaders[header];
        }
    }
    return formHeaders;
};
FormData.prototype.setBoundary = function(boundary) {
    if (typeof boundary !== 'string') {
        throw new TypeError('FormData boundary must be a string');
    }
    this._boundary = boundary;
};
FormData.prototype.getBoundary = function() {
    if (!this._boundary) {
        this._generateBoundary();
    }
    return this._boundary;
};
FormData.prototype.getBuffer = function() {
    var dataBuffer = new Buffer.alloc(0); // eslint-disable-line new-cap
    var boundary = this.getBoundary();
    // Create the form content. Add Line breaks to the end of data.
    for(var i = 0, len = this._streams.length; i < len; i++){
        if (typeof this._streams[i] !== 'function') {
            // Add content to the buffer.
            if (Buffer.isBuffer(this._streams[i])) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    this._streams[i]
                ]);
            } else {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(this._streams[i])
                ]);
            }
            // Add break after content.
            if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(FormData.LINE_BREAK)
                ]);
            }
        }
    }
    // Add the footer and return the Buffer object.
    return Buffer.concat([
        dataBuffer,
        Buffer.from(this._lastBoundary())
    ]);
};
FormData.prototype._generateBoundary = function() {
    // This generates a 50 character boundary similar to those used by Firefox.
    // They are optimized for boyer-moore parsing.
    this._boundary = '--------------------------' + crypto.randomBytes(12).toString('hex');
};
// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually and add it as knownLength option
FormData.prototype.getLengthSync = function() {
    var knownLength = this._overheadLength + this._valueLength;
    // Don't get confused, there are 3 "internal" streams for each keyval pair so it basically checks if there is any value added to the form
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    // https://github.com/form-data/form-data/issues/40
    if (!this.hasKnownLength()) {
        /*
     * Some async length retrievers are present
     * therefore synchronous length calculation is false.
     * Please use getLength(callback) to get proper length
     */ this._error(new Error('Cannot calculate proper length in synchronous way.'));
    }
    return knownLength;
};
// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
    var hasKnownLength = true;
    if (this._valuesToMeasure.length) {
        hasKnownLength = false;
    }
    return hasKnownLength;
};
FormData.prototype.getLength = function(cb) {
    var knownLength = this._overheadLength + this._valueLength;
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
    }
    asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
            cb(err);
            return;
        }
        values.forEach(function(length) {
            knownLength += length;
        });
        cb(null, knownLength);
    });
};
FormData.prototype.submit = function(params, cb) {
    var request;
    var options;
    var defaults = {
        method: 'post'
    };
    // parse provided url if it's string or treat it as options object
    if (typeof params === 'string') {
        params = parseUrl(params); // eslint-disable-line no-param-reassign
        /* eslint sort-keys: 0 */ options = populate({
            port: params.port,
            path: params.pathname,
            host: params.hostname,
            protocol: params.protocol
        }, defaults);
    } else {
        options = populate(params, defaults);
        // if no port provided use default one
        if (!options.port) {
            options.port = options.protocol === 'https:' ? 443 : 80;
        }
    }
    // put that good code in getHeaders to some use
    options.headers = this.getHeaders(params.headers);
    // https if specified, fallback to http in any other case
    if (options.protocol === 'https:') {
        request = https.request(options);
    } else {
        request = http.request(options);
    }
    // get content length and fire away
    this.getLength((function(err, length) {
        if (err && err !== 'Unknown stream') {
            this._error(err);
            return;
        }
        // add content length
        if (length) {
            request.setHeader('Content-Length', length);
        }
        this.pipe(request);
        if (cb) {
            var onResponse;
            var callback = function(error, responce) {
                request.removeListener('error', callback);
                request.removeListener('response', onResponse);
                return cb.call(this, error, responce); // eslint-disable-line no-invalid-this
            };
            onResponse = callback.bind(this, null);
            request.on('error', callback);
            request.on('response', onResponse);
        }
    }).bind(this));
    return request;
};
FormData.prototype._error = function(err) {
    if (!this.error) {
        this.error = err;
        this.pause();
        this.emit('error', err);
    }
};
FormData.prototype.toString = function() {
    return '[object FormData]';
};
setToStringTag(FormData, 'FormData');
// Public API
module.exports = FormData;
}),
"[project]/client/node_modules/proxy-from-env/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var DEFAULT_PORTS = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
var stringEndsWith = String.prototype.endsWith || function(s) {
    return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
};
/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */ function getProxyForUrl(url) {
    var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
    var proto = parsedUrl.protocol;
    var hostname = parsedUrl.host;
    var port = parsedUrl.port;
    if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
        return ''; // Don't proxy URLs without a valid scheme or host.
    }
    proto = proto.split(':', 1)[0];
    // Stripping ports in this way instead of using parsedUrl.hostname to make
    // sure that the brackets around IPv6 addresses are kept.
    hostname = hostname.replace(/:\d*$/, '');
    port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
    if (!shouldProxy(hostname, port)) {
        return ''; // Don't proxy URLs that match NO_PROXY.
    }
    var proxy = getEnv('npm_config_' + proto + '_proxy') || getEnv(proto + '_proxy') || getEnv('npm_config_proxy') || getEnv('all_proxy');
    if (proxy && proxy.indexOf('://') === -1) {
        // Missing scheme in proxy, default to the requested URL's scheme.
        proxy = proto + '://' + proxy;
    }
    return proxy;
}
/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */ function shouldProxy(hostname, port) {
    var NO_PROXY = (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
    if (!NO_PROXY) {
        return true; // Always proxy if NO_PROXY is not set.
    }
    if (NO_PROXY === '*') {
        return false; // Never proxy if wildcard is set.
    }
    return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
            return true; // Skip zero-length hosts.
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
            return true; // Skip if ports don't match.
        }
        if (!/^[.*]/.test(parsedProxyHostname)) {
            // No wildcards, so stop proxying if there is an exact match.
            return hostname !== parsedProxyHostname;
        }
        if (parsedProxyHostname.charAt(0) === '*') {
            // Remove leading wildcard.
            parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        // Stop proxying if the hostname ends with the no_proxy host.
        return !stringEndsWith.call(hostname, parsedProxyHostname);
    });
}
/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */ function getEnv(key) {
    return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}
exports.getProxyForUrl = getProxyForUrl;
}),
"[project]/client/node_modules/ms/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/client/node_modules/debug/src/common.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/client/node_modules/ms/index.js [app-rsc] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(/\s+/g, ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/client/node_modules/debug/src/node.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/client/node_modules/supports-color/index.js [app-rsc] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/client/node_modules/debug/src/common.js [app-rsc] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/client/node_modules/debug/src/browser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug') || exports.storage.getItem('DEBUG');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/client/node_modules/debug/src/common.js [app-rsc] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/client/node_modules/debug/src/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/client/node_modules/debug/src/browser.js [app-rsc] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/client/node_modules/debug/src/node.js [app-rsc] (ecmascript)");
}
}),
"[project]/client/node_modules/has-flag/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/client/node_modules/supports-color/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/client/node_modules/has-flag/index.js [app-rsc] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // Windows 10 build 10586 is the first Windows release that supports 256 colors.
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = os.release().split('.');
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
            return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
    }
    //TURBOPACK unreachable
    ;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/client/node_modules/follow-redirects/debug.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __turbopack_context__.r("[project]/client/node_modules/debug/src/index.js [app-rsc] (ecmascript)")("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};
}),
"[project]/client/node_modules/follow-redirects/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var URL = url.URL;
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var Writable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Writable;
var assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
var debug = __turbopack_context__.r("[project]/client/node_modules/follow-redirects/debug.js [app-rsc] (ecmascript)");
// Preventive platform detection
// istanbul ignore next
(function detectUnsupportedEnvironment() {
    var looksLikeNode = typeof process !== "undefined";
    var looksLikeBrowser = ("TURBOPACK compile-time value", "undefined") !== "undefined" && typeof document !== "undefined";
    var looksLikeV8 = isFunction(Error.captureStackTrace);
    if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
    }
})();
// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
    assert(new URL(""));
} catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
}
// URL fields to preserve in copy operations
var preservedUrlFields = [
    "auth",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "hash"
];
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        try {
            self._processResponse(response);
        } catch (cause) {
            self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
                cause: cause
            }));
        }
    };
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        self.removeListener("close", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            // istanbul ignore else
            if (request === self._currentRequest) {
                // Report any write errors
                // istanbul ignore if
                if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    // istanbul ignore else
                    if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    this._performRequest();
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters, ensuring that input is an object
            if (isURL(input)) {
                input = spreadUrlObject(input);
            } else if (isString(input)) {
                input = spreadUrlObject(parseUrl(input));
            } else {
                callback = options;
                options = validateUrl(input);
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
function noop() {}
function parseUrl(input) {
    var parsed;
    // istanbul ignore else
    if (useNativeURL) {
        parsed = new URL(input);
    } else {
        // Ensure the URL is valid and absolute
        parsed = validateUrl(url.parse(input));
        if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
                input
            });
        }
    }
    return parsed;
}
function resolveUrl(relative, base) {
    // istanbul ignore next
    return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    return input;
}
function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    for (var key of preservedUrlFields){
        spread[key] = urlObject[key];
    }
    // Fix IPv6 hostname
    if (spread.hostname.startsWith("[")) {
        spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
        spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        // istanbul ignore else
        if (isFunction(Error.captureStackTrace)) {
            Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false
        },
        name: {
            value: "Error [" + code + "]",
            enumerable: false
        }
    });
    return CustomError;
}
function destroyRequest(request, error) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
function isURL(value) {
    return URL && value instanceof URL;
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;
}),
"[project]/client/node_modules/immer/dist/immer.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/env.ts
__turbopack_context__.s([
    "Immer",
    ()=>Immer2,
    "applyPatches",
    ()=>applyPatches,
    "castDraft",
    ()=>castDraft,
    "castImmutable",
    ()=>castImmutable,
    "createDraft",
    ()=>createDraft,
    "current",
    ()=>current,
    "enableMapSet",
    ()=>enableMapSet,
    "enablePatches",
    ()=>enablePatches,
    "finishDraft",
    ()=>finishDraft,
    "freeze",
    ()=>freeze,
    "immerable",
    ()=>DRAFTABLE,
    "isDraft",
    ()=>isDraft,
    "isDraftable",
    ()=>isDraftable,
    "nothing",
    ()=>NOTHING,
    "original",
    ()=>original,
    "produce",
    ()=>produce,
    "produceWithPatches",
    ()=>produceWithPatches,
    "setAutoFreeze",
    ()=>setAutoFreeze,
    "setUseStrictIteration",
    ()=>setUseStrictIteration,
    "setUseStrictShallowCopy",
    ()=>setUseStrictShallowCopy
]);
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
// src/utils/errors.ts
var errors = ("TURBOPACK compile-time truthy", 1) ? [
    // All error codes, starting by 0:
    function(plugin) {
        return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
    },
    function(thing) {
        return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
    },
    "This object has been frozen and should not be mutated",
    function(data) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
    },
    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    "Immer forbids circular references",
    "The first or second argument to `produce` must be a function",
    "The third argument to `produce` must be a function or undefined",
    "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    "First argument to `finishDraft` must be a draft returned by `createDraft`",
    function(thing) {
        return `'current' expects a draft, got: ${thing}`;
    },
    "Object.defineProperty() cannot be used on an Immer draft",
    "Object.setPrototypeOf() cannot be used on an Immer draft",
    "Immer only supports deleting array indices",
    "Immer only supports setting array indices and the 'length' property",
    function(thing) {
        return `'original' expects a draft, got: ${thing}`;
    }
] : "TURBOPACK unreachable";
function die(error, ...args) {
    if ("TURBOPACK compile-time truthy", 1) {
        const e = errors[error];
        const msg = typeof e === "function" ? e.apply(null, args) : e;
        throw new Error(`[Immer] ${msg}`);
    }
    throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}
// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
    if (!value) return false;
    return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject(value) {
    if (!value || typeof value !== "object") return false;
    const proto = Object.getPrototypeOf(value);
    if (proto === null || proto === Object.prototype) return true;
    const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    if (Ctor === Object) return true;
    if (typeof Ctor !== "function") return false;
    let ctorString = cachedCtorStrings.get(Ctor);
    if (ctorString === void 0) {
        ctorString = Function.toString.call(Ctor);
        cachedCtorStrings.set(Ctor, ctorString);
    }
    return ctorString === objectCtorString;
}
function original(value) {
    if (!isDraft(value)) die(15, value);
    return value[DRAFT_STATE].base_;
}
function each(obj, iter, strict = true) {
    if (getArchtype(obj) === 0 /* Object */ ) {
        const keys = strict ? Reflect.ownKeys(obj) : Object.keys(obj);
        keys.forEach((key)=>{
            iter(key, obj[key], obj);
        });
    } else {
        obj.forEach((entry, index)=>iter(index, entry, obj));
    }
}
function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */  : isMap(thing) ? 2 /* Map */  : isSet(thing) ? 3 /* Set */  : 0 /* Object */ ;
}
function has(thing, prop) {
    return getArchtype(thing) === 2 /* Map */  ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
    return getArchtype(thing) === 2 /* Map */  ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
    const t = getArchtype(thing);
    if (t === 2 /* Map */ ) thing.set(propOrOldValue, value);
    else if (t === 3 /* Set */ ) {
        thing.add(value);
    } else thing[propOrOldValue] = value;
}
function is(x, y) {
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function isMap(target) {
    return target instanceof Map;
}
function isSet(target) {
    return target instanceof Set;
}
function latest(state) {
    return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
    if (isMap(base)) {
        return new Map(base);
    }
    if (isSet(base)) {
        return new Set(base);
    }
    if (Array.isArray(base)) return Array.prototype.slice.call(base);
    const isPlain = isPlainObject(base);
    if (strict === true || strict === "class_only" && !isPlain) {
        const descriptors = Object.getOwnPropertyDescriptors(base);
        delete descriptors[DRAFT_STATE];
        let keys = Reflect.ownKeys(descriptors);
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            const desc = descriptors[key];
            if (desc.writable === false) {
                desc.writable = true;
                desc.configurable = true;
            }
            if (desc.get || desc.set) descriptors[key] = {
                configurable: true,
                writable: true,
                // could live with !!desc.set as well here...
                enumerable: desc.enumerable,
                value: base[key]
            };
        }
        return Object.create(getPrototypeOf(base), descriptors);
    } else {
        const proto = getPrototypeOf(base);
        if (proto !== null && isPlain) {
            return {
                ...base
            };
        }
        const obj = Object.create(proto);
        return Object.assign(obj, base);
    }
}
function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
    if (getArchtype(obj) > 1) {
        Object.defineProperties(obj, {
            set: dontMutateMethodOverride,
            add: dontMutateMethodOverride,
            clear: dontMutateMethodOverride,
            delete: dontMutateMethodOverride
        });
    }
    Object.freeze(obj);
    if (deep) Object.values(obj).forEach((value)=>freeze(value, true));
    return obj;
}
function dontMutateFrozenCollections() {
    die(2);
}
var dontMutateMethodOverride = {
    value: dontMutateFrozenCollections
};
function isFrozen(obj) {
    if (obj === null || typeof obj !== "object") return true;
    return Object.isFrozen(obj);
}
// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) {
        die(0, pluginKey);
    }
    return plugin;
}
function loadPlugin(pluginKey, implementation) {
    if (!plugins[pluginKey]) plugins[pluginKey] = implementation;
}
// src/core/scope.ts
var currentScope;
function getCurrentScope() {
    return currentScope;
}
function createScope(parent_, immer_) {
    return {
        drafts_: [],
        parent_,
        immer_,
        // Whenever the modified draft contains a draft from another scope, we
        // need to prevent auto-freezing so the unowned draft can be finalized.
        canAutoFreeze_: true,
        unfinalizedDrafts_: 0
    };
}
function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
        getPlugin("Patches");
        scope.patches_ = [];
        scope.inversePatches_ = [];
        scope.patchListener_ = patchListener;
    }
}
function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
}
function leaveScope(scope) {
    if (scope === currentScope) {
        currentScope = scope.parent_;
    }
}
function enterScope(immer2) {
    return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
    const state = draft[DRAFT_STATE];
    if (state.type_ === 0 /* Object */  || state.type_ === 1 /* Array */ ) state.revoke_();
    else state.revoked_ = true;
}
// src/core/finalize.ts
function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
        if (baseDraft[DRAFT_STATE].modified_) {
            revokeScope(scope);
            die(4);
        }
        if (isDraftable(result)) {
            result = finalize(scope, result);
            if (!scope.parent_) maybeFreeze(scope, result);
        }
        if (scope.patches_) {
            getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
        }
    } else {
        result = finalize(scope, baseDraft, []);
    }
    revokeScope(scope);
    if (scope.patches_) {
        scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
    if (isFrozen(value)) return value;
    const useStrictIteration = rootScope.immer_.shouldUseStrictIteration();
    const state = value[DRAFT_STATE];
    if (!state) {
        each(value, (key, childValue)=>finalizeProperty(rootScope, state, value, key, childValue, path), useStrictIteration);
        return value;
    }
    if (state.scope_ !== rootScope) return value;
    if (!state.modified_) {
        maybeFreeze(rootScope, state.base_, true);
        return state.base_;
    }
    if (!state.finalized_) {
        state.finalized_ = true;
        state.scope_.unfinalizedDrafts_--;
        const result = state.copy_;
        let resultEach = result;
        let isSet2 = false;
        if (state.type_ === 3 /* Set */ ) {
            resultEach = new Set(result);
            result.clear();
            isSet2 = true;
        }
        each(resultEach, (key, childValue)=>finalizeProperty(rootScope, state, result, key, childValue, path, isSet2), useStrictIteration);
        maybeFreeze(rootScope, result, false);
        if (path && rootScope.patches_) {
            getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
        }
    }
    return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
    if (childValue == null) {
        return;
    }
    if (typeof childValue !== "object" && !targetIsSet) {
        return;
    }
    const childIsFrozen = isFrozen(childValue);
    if (childIsFrozen && !targetIsSet) {
        return;
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && childValue === targetObject) die(5);
    if (isDraft(childValue)) {
        const path = rootPath && parentState && parentState.type_ !== 3 /* Set */  && // Set objects are atomic since they have no keys.
        !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
        const res = finalize(rootScope, childValue, path);
        set(targetObject, prop, res);
        if (isDraft(res)) {
            rootScope.canAutoFreeze_ = false;
        } else return;
    } else if (targetIsSet) {
        targetObject.add(childValue);
    }
    if (isDraftable(childValue) && !childIsFrozen) {
        if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
            return;
        }
        if (parentState && parentState.base_ && parentState.base_[prop] === childValue && childIsFrozen) {
            return;
        }
        finalize(rootScope, childValue);
        if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop))) maybeFreeze(rootScope, childValue);
    }
}
function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
        freeze(value, deep);
    }
}
// src/core/proxy.ts
function createProxyProxy(base, parent) {
    const isArray = Array.isArray(base);
    const state = {
        type_: isArray ? 1 /* Array */  : 0 /* Object */ ,
        // Track which produce call this is associated with.
        scope_: parent ? parent.scope_ : getCurrentScope(),
        // True for both shallow and deep changes.
        modified_: false,
        // Used during finalization.
        finalized_: false,
        // Track which properties have been assigned (true) or deleted (false).
        assigned_: {},
        // The parent draft state.
        parent_: parent,
        // The base state.
        base_: base,
        // The base proxy.
        draft_: null,
        // set below
        // The base copy with any updated values.
        copy_: null,
        // Called by the `produce` function.
        revoke_: null,
        isManual_: false
    };
    let target = state;
    let traps = objectTraps;
    if (isArray) {
        target = [
            state
        ];
        traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return proxy;
}
var objectTraps = {
    get (state, prop) {
        if (prop === DRAFT_STATE) return state;
        const source = latest(state);
        if (!has(source, prop)) {
            return readPropFromProto(state, source, prop);
        }
        const value = source[prop];
        if (state.finalized_ || !isDraftable(value)) {
            return value;
        }
        if (value === peek(state.base_, prop)) {
            prepareCopy(state);
            return state.copy_[prop] = createProxy(value, state);
        }
        return value;
    },
    has (state, prop) {
        return prop in latest(state);
    },
    ownKeys (state) {
        return Reflect.ownKeys(latest(state));
    },
    set (state, prop, value) {
        const desc = getDescriptorFromProto(latest(state), prop);
        if (desc?.set) {
            desc.set.call(state.draft_, value);
            return true;
        }
        if (!state.modified_) {
            const current2 = peek(latest(state), prop);
            const currentState = current2?.[DRAFT_STATE];
            if (currentState && currentState.base_ === value) {
                state.copy_[prop] = value;
                state.assigned_[prop] = false;
                return true;
            }
            if (is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
            prepareCopy(state);
            markChanged(state);
        }
        if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
        (value !== void 0 || prop in state.copy_) || // special case: NaN
        Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
        state.copy_[prop] = value;
        state.assigned_[prop] = true;
        return true;
    },
    deleteProperty (state, prop) {
        if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
            state.assigned_[prop] = false;
            prepareCopy(state);
            markChanged(state);
        } else {
            delete state.assigned_[prop];
        }
        if (state.copy_) {
            delete state.copy_[prop];
        }
        return true;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor (state, prop) {
        const owner = latest(state);
        const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
        if (!desc) return desc;
        return {
            writable: true,
            configurable: state.type_ !== 1 /* Array */  || prop !== "length",
            enumerable: desc.enumerable,
            value: owner[prop]
        };
    },
    defineProperty () {
        die(11);
    },
    getPrototypeOf (state) {
        return getPrototypeOf(state.base_);
    },
    setPrototypeOf () {
        die(12);
    }
};
var arrayTraps = {};
each(objectTraps, (key, fn)=>{
    arrayTraps[key] = function() {
        arguments[0] = arguments[0][0];
        return fn.apply(this, arguments);
    };
});
arrayTraps.deleteProperty = function(state, prop) {
    if (("TURBOPACK compile-time value", "development") !== "production" && isNaN(parseInt(prop))) die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
    if (("TURBOPACK compile-time value", "development") !== "production" && prop !== "length" && isNaN(parseInt(prop))) die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
}
function readPropFromProto(state, source, prop) {
    const desc = getDescriptorFromProto(source, prop);
    return desc ? `value` in desc ? desc.value : // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
    if (!(prop in source)) return void 0;
    let proto = getPrototypeOf(source);
    while(proto){
        const desc = Object.getOwnPropertyDescriptor(proto, prop);
        if (desc) return desc;
        proto = getPrototypeOf(proto);
    }
    return void 0;
}
function markChanged(state) {
    if (!state.modified_) {
        state.modified_ = true;
        if (state.parent_) {
            markChanged(state.parent_);
        }
    }
}
function prepareCopy(state) {
    if (!state.copy_) {
        state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
    }
}
// src/core/immerClass.ts
var Immer2 = class {
    constructor(config){
        this.autoFreeze_ = true;
        this.useStrictShallowCopy_ = false;
        this.useStrictIteration_ = true;
        /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */ this.produce = (base, recipe, patchListener)=>{
            if (typeof base === "function" && typeof recipe !== "function") {
                const defaultBase = recipe;
                recipe = base;
                const self = this;
                return function curriedProduce(base2 = defaultBase, ...args) {
                    return self.produce(base2, (draft)=>recipe.call(this, draft, ...args));
                };
            }
            if (typeof recipe !== "function") die(6);
            if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
            let result;
            if (isDraftable(base)) {
                const scope = enterScope(this);
                const proxy = createProxy(base, void 0);
                let hasError = true;
                try {
                    result = recipe(proxy);
                    hasError = false;
                } finally{
                    if (hasError) revokeScope(scope);
                    else leaveScope(scope);
                }
                usePatchesInScope(scope, patchListener);
                return processResult(result, scope);
            } else if (!base || typeof base !== "object") {
                result = recipe(base);
                if (result === void 0) result = base;
                if (result === NOTHING) result = void 0;
                if (this.autoFreeze_) freeze(result, true);
                if (patchListener) {
                    const p = [];
                    const ip = [];
                    getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
                    patchListener(p, ip);
                }
                return result;
            } else die(1, base);
        };
        this.produceWithPatches = (base, recipe)=>{
            if (typeof base === "function") {
                return (state, ...args)=>this.produceWithPatches(state, (draft)=>base(draft, ...args));
            }
            let patches, inversePatches;
            const result = this.produce(base, recipe, (p, ip)=>{
                patches = p;
                inversePatches = ip;
            });
            return [
                result,
                patches,
                inversePatches
            ];
        };
        if (typeof config?.autoFreeze === "boolean") this.setAutoFreeze(config.autoFreeze);
        if (typeof config?.useStrictShallowCopy === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
        if (typeof config?.useStrictIteration === "boolean") this.setUseStrictIteration(config.useStrictIteration);
    }
    createDraft(base) {
        if (!isDraftable(base)) die(8);
        if (isDraft(base)) base = current(base);
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        proxy[DRAFT_STATE].isManual_ = true;
        leaveScope(scope);
        return proxy;
    }
    finishDraft(draft, patchListener) {
        const state = draft && draft[DRAFT_STATE];
        if (!state || !state.isManual_) die(9);
        const { scope_: scope } = state;
        usePatchesInScope(scope, patchListener);
        return processResult(void 0, scope);
    }
    /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */ setAutoFreeze(value) {
        this.autoFreeze_ = value;
    }
    /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */ setUseStrictShallowCopy(value) {
        this.useStrictShallowCopy_ = value;
    }
    /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */ setUseStrictIteration(value) {
        this.useStrictIteration_ = value;
    }
    shouldUseStrictIteration() {
        return this.useStrictIteration_;
    }
    applyPatches(base, patches) {
        let i;
        for(i = patches.length - 1; i >= 0; i--){
            const patch = patches[i];
            if (patch.path.length === 0 && patch.op === "replace") {
                base = patch.value;
                break;
            }
        }
        if (i > -1) {
            patches = patches.slice(i + 1);
        }
        const applyPatchesImpl = getPlugin("Patches").applyPatches_;
        if (isDraft(base)) {
            return applyPatchesImpl(base, patches);
        }
        return this.produce(base, (draft)=>applyPatchesImpl(draft, patches));
    }
};
function createProxy(value, parent) {
    const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent ? parent.scope_ : getCurrentScope();
    scope.drafts_.push(draft);
    return draft;
}
// src/core/current.ts
function current(value) {
    if (!isDraft(value)) die(10, value);
    return currentImpl(value);
}
function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value)) return value;
    const state = value[DRAFT_STATE];
    let copy;
    let strict = true;
    if (state) {
        if (!state.modified_) return state.base_;
        state.finalized_ = true;
        copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
        strict = state.scope_.immer_.shouldUseStrictIteration();
    } else {
        copy = shallowCopy(value, true);
    }
    each(copy, (key, childValue)=>{
        set(copy, key, currentImpl(childValue));
    }, strict);
    if (state) {
        state.finalized_ = false;
    }
    return copy;
}
// src/plugins/patches.ts
function enablePatches() {
    const errorOffset = 16;
    if ("TURBOPACK compile-time truthy", 1) {
        errors.push('Sets cannot have "replace" patches.', function(op) {
            return "Unsupported patch operation: " + op;
        }, function(path) {
            return "Cannot apply patch, path doesn't resolve: " + path;
        }, "Patching reserved attributes like __proto__, prototype and constructor is not allowed");
    }
    const REPLACE = "replace";
    const ADD = "add";
    const REMOVE = "remove";
    function generatePatches_(state, basePath, patches, inversePatches) {
        switch(state.type_){
            case 0 /* Object */ :
            case 2 /* Map */ :
                return generatePatchesFromAssigned(state, basePath, patches, inversePatches);
            case 1 /* Array */ :
                return generateArrayPatches(state, basePath, patches, inversePatches);
            case 3 /* Set */ :
                return generateSetPatches(state, basePath, patches, inversePatches);
        }
    }
    function generateArrayPatches(state, basePath, patches, inversePatches) {
        let { base_, assigned_ } = state;
        let copy_ = state.copy_;
        if (copy_.length < base_.length) {
            ;
            [base_, copy_] = [
                copy_,
                base_
            ];
            [patches, inversePatches] = [
                inversePatches,
                patches
            ];
        }
        for(let i = 0; i < base_.length; i++){
            if (assigned_[i] && copy_[i] !== base_[i]) {
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: REPLACE,
                    path,
                    // Need to maybe clone it, as it can in fact be the original value
                    // due to the base/copy inversion at the start of this function
                    value: clonePatchValueIfNeeded(copy_[i])
                });
                inversePatches.push({
                    op: REPLACE,
                    path,
                    value: clonePatchValueIfNeeded(base_[i])
                });
            }
        }
        for(let i = base_.length; i < copy_.length; i++){
            const path = basePath.concat([
                i
            ]);
            patches.push({
                op: ADD,
                path,
                // Need to maybe clone it, as it can in fact be the original value
                // due to the base/copy inversion at the start of this function
                value: clonePatchValueIfNeeded(copy_[i])
            });
        }
        for(let i = copy_.length - 1; base_.length <= i; --i){
            const path = basePath.concat([
                i
            ]);
            inversePatches.push({
                op: REMOVE,
                path
            });
        }
    }
    function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
        const { base_, copy_ } = state;
        each(state.assigned_, (key, assignedValue)=>{
            const origValue = get(base_, key);
            const value = get(copy_, key);
            const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
            if (origValue === value && op === REPLACE) return;
            const path = basePath.concat(key);
            patches.push(op === REMOVE ? {
                op,
                path
            } : {
                op,
                path,
                value
            });
            inversePatches.push(op === ADD ? {
                op: REMOVE,
                path
            } : op === REMOVE ? {
                op: ADD,
                path,
                value: clonePatchValueIfNeeded(origValue)
            } : {
                op: REPLACE,
                path,
                value: clonePatchValueIfNeeded(origValue)
            });
        });
    }
    function generateSetPatches(state, basePath, patches, inversePatches) {
        let { base_, copy_ } = state;
        let i = 0;
        base_.forEach((value)=>{
            if (!copy_.has(value)) {
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: REMOVE,
                    path,
                    value
                });
                inversePatches.unshift({
                    op: ADD,
                    path,
                    value
                });
            }
            i++;
        });
        i = 0;
        copy_.forEach((value)=>{
            if (!base_.has(value)) {
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: ADD,
                    path,
                    value
                });
                inversePatches.unshift({
                    op: REMOVE,
                    path,
                    value
                });
            }
            i++;
        });
    }
    function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
        patches.push({
            op: REPLACE,
            path: [],
            value: replacement === NOTHING ? void 0 : replacement
        });
        inversePatches.push({
            op: REPLACE,
            path: [],
            value: baseValue
        });
    }
    function applyPatches_(draft, patches) {
        patches.forEach((patch)=>{
            const { path, op } = patch;
            let base = draft;
            for(let i = 0; i < path.length - 1; i++){
                const parentType = getArchtype(base);
                let p = path[i];
                if (typeof p !== "string" && typeof p !== "number") {
                    p = "" + p;
                }
                if ((parentType === 0 /* Object */  || parentType === 1 /* Array */ ) && (p === "__proto__" || p === "constructor")) die(errorOffset + 3);
                if (typeof base === "function" && p === "prototype") die(errorOffset + 3);
                base = get(base, p);
                if (typeof base !== "object") die(errorOffset + 2, path.join("/"));
            }
            const type = getArchtype(base);
            const value = deepClonePatchValue(patch.value);
            const key = path[path.length - 1];
            switch(op){
                case REPLACE:
                    switch(type){
                        case 2 /* Map */ :
                            return base.set(key, value);
                        case 3 /* Set */ :
                            die(errorOffset);
                        default:
                            return base[key] = value;
                    }
                case ADD:
                    switch(type){
                        case 1 /* Array */ :
                            return key === "-" ? base.push(value) : base.splice(key, 0, value);
                        case 2 /* Map */ :
                            return base.set(key, value);
                        case 3 /* Set */ :
                            return base.add(value);
                        default:
                            return base[key] = value;
                    }
                case REMOVE:
                    switch(type){
                        case 1 /* Array */ :
                            return base.splice(key, 1);
                        case 2 /* Map */ :
                            return base.delete(key);
                        case 3 /* Set */ :
                            return base.delete(patch.value);
                        default:
                            return delete base[key];
                    }
                default:
                    die(errorOffset + 1, op);
            }
        });
        return draft;
    }
    function deepClonePatchValue(obj) {
        if (!isDraftable(obj)) return obj;
        if (Array.isArray(obj)) return obj.map(deepClonePatchValue);
        if (isMap(obj)) return new Map(Array.from(obj.entries()).map(([k, v])=>[
                k,
                deepClonePatchValue(v)
            ]));
        if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
        const cloned = Object.create(getPrototypeOf(obj));
        for(const key in obj)cloned[key] = deepClonePatchValue(obj[key]);
        if (has(obj, DRAFTABLE)) cloned[DRAFTABLE] = obj[DRAFTABLE];
        return cloned;
    }
    function clonePatchValueIfNeeded(obj) {
        if (isDraft(obj)) {
            return deepClonePatchValue(obj);
        } else return obj;
    }
    loadPlugin("Patches", {
        applyPatches_,
        generatePatches_,
        generateReplacementPatches_
    });
}
// src/plugins/mapset.ts
function enableMapSet() {
    class DraftMap extends Map {
        constructor(target, parent){
            super();
            this[DRAFT_STATE] = {
                type_: 2 /* Map */ ,
                parent_: parent,
                scope_: parent ? parent.scope_ : getCurrentScope(),
                modified_: false,
                finalized_: false,
                copy_: void 0,
                assigned_: void 0,
                base_: target,
                draft_: this,
                isManual_: false,
                revoked_: false
            };
        }
        get size() {
            return latest(this[DRAFT_STATE]).size;
        }
        has(key) {
            return latest(this[DRAFT_STATE]).has(key);
        }
        set(key, value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!latest(state).has(key) || latest(state).get(key) !== value) {
                prepareMapCopy(state);
                markChanged(state);
                state.assigned_.set(key, true);
                state.copy_.set(key, value);
                state.assigned_.set(key, true);
            }
            return this;
        }
        delete(key) {
            if (!this.has(key)) {
                return false;
            }
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareMapCopy(state);
            markChanged(state);
            if (state.base_.has(key)) {
                state.assigned_.set(key, false);
            } else {
                state.assigned_.delete(key);
            }
            state.copy_.delete(key);
            return true;
        }
        clear() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (latest(state).size) {
                prepareMapCopy(state);
                markChanged(state);
                state.assigned_ = /* @__PURE__ */ new Map();
                each(state.base_, (key)=>{
                    state.assigned_.set(key, false);
                });
                state.copy_.clear();
            }
        }
        forEach(cb, thisArg) {
            const state = this[DRAFT_STATE];
            latest(state).forEach((_value, key, _map)=>{
                cb.call(thisArg, this.get(key), key, this);
            });
        }
        get(key) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            const value = latest(state).get(key);
            if (state.finalized_ || !isDraftable(value)) {
                return value;
            }
            if (value !== state.base_.get(key)) {
                return value;
            }
            const draft = createProxy(value, state);
            prepareMapCopy(state);
            state.copy_.set(key, draft);
            return draft;
        }
        keys() {
            return latest(this[DRAFT_STATE]).keys();
        }
        values() {
            const iterator = this.keys();
            return {
                [Symbol.iterator]: ()=>this.values(),
                next: ()=>{
                    const r = iterator.next();
                    if (r.done) return r;
                    const value = this.get(r.value);
                    return {
                        done: false,
                        value
                    };
                }
            };
        }
        entries() {
            const iterator = this.keys();
            return {
                [Symbol.iterator]: ()=>this.entries(),
                next: ()=>{
                    const r = iterator.next();
                    if (r.done) return r;
                    const value = this.get(r.value);
                    return {
                        done: false,
                        value: [
                            r.value,
                            value
                        ]
                    };
                }
            };
        }
        [(DRAFT_STATE, Symbol.iterator)]() {
            return this.entries();
        }
    }
    function proxyMap_(target, parent) {
        return new DraftMap(target, parent);
    }
    function prepareMapCopy(state) {
        if (!state.copy_) {
            state.assigned_ = /* @__PURE__ */ new Map();
            state.copy_ = new Map(state.base_);
        }
    }
    class DraftSet extends Set {
        constructor(target, parent){
            super();
            this[DRAFT_STATE] = {
                type_: 3 /* Set */ ,
                parent_: parent,
                scope_: parent ? parent.scope_ : getCurrentScope(),
                modified_: false,
                finalized_: false,
                copy_: void 0,
                base_: target,
                draft_: this,
                drafts_: /* @__PURE__ */ new Map(),
                revoked_: false,
                isManual_: false
            };
        }
        get size() {
            return latest(this[DRAFT_STATE]).size;
        }
        has(value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!state.copy_) {
                return state.base_.has(value);
            }
            if (state.copy_.has(value)) return true;
            if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value))) return true;
            return false;
        }
        add(value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!this.has(value)) {
                prepareSetCopy(state);
                markChanged(state);
                state.copy_.add(value);
            }
            return this;
        }
        delete(value) {
            if (!this.has(value)) {
                return false;
            }
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            markChanged(state);
            return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : /* istanbul ignore next */ false);
        }
        clear() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (latest(state).size) {
                prepareSetCopy(state);
                markChanged(state);
                state.copy_.clear();
            }
        }
        values() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            return state.copy_.values();
        }
        entries() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            return state.copy_.entries();
        }
        keys() {
            return this.values();
        }
        [(DRAFT_STATE, Symbol.iterator)]() {
            return this.values();
        }
        forEach(cb, thisArg) {
            const iterator = this.values();
            let result = iterator.next();
            while(!result.done){
                cb.call(thisArg, result.value, result.value, this);
                result = iterator.next();
            }
        }
    }
    function proxySet_(target, parent) {
        return new DraftSet(target, parent);
    }
    function prepareSetCopy(state) {
        if (!state.copy_) {
            state.copy_ = /* @__PURE__ */ new Set();
            state.base_.forEach((value)=>{
                if (isDraftable(value)) {
                    const draft = createProxy(value, state);
                    state.drafts_.set(value, draft);
                    state.copy_.add(draft);
                } else {
                    state.copy_.add(value);
                }
            });
        }
    }
    function assertUnrevoked(state) {
        if (state.revoked_) die(3, JSON.stringify(latest(state)));
    }
    loadPlugin("MapSet", {
        proxyMap_,
        proxySet_
    });
}
// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = /* @__PURE__ */ immer.produceWithPatches.bind(immer);
var setAutoFreeze = /* @__PURE__ */ immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = /* @__PURE__ */ immer.setUseStrictShallowCopy.bind(immer);
var setUseStrictIteration = /* @__PURE__ */ immer.setUseStrictIteration.bind(immer);
var applyPatches = /* @__PURE__ */ immer.applyPatches.bind(immer);
var createDraft = /* @__PURE__ */ immer.createDraft.bind(immer);
var finishDraft = /* @__PURE__ */ immer.finishDraft.bind(immer);
function castDraft(value) {
    return value;
}
function castImmutable(value) {
    return value;
}
;
 //# sourceMappingURL=immer.mjs.map
}),
"[project]/client/node_modules/reselect/dist/reselect.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/devModeChecks/identityFunctionCheck.ts
__turbopack_context__.s([
    "createSelector",
    ()=>createSelector,
    "createSelectorCreator",
    ()=>createSelectorCreator,
    "createStructuredSelector",
    ()=>createStructuredSelector,
    "lruMemoize",
    ()=>lruMemoize,
    "referenceEqualityCheck",
    ()=>referenceEqualityCheck,
    "setGlobalDevModeChecks",
    ()=>setGlobalDevModeChecks,
    "unstable_autotrackMemoize",
    ()=>autotrackMemoize,
    "weakMapMemoize",
    ()=>weakMapMemoize
]);
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult)=>{
    if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
        let isInputSameAsOutput = false;
        try {
            const emptyObject = {};
            if (resultFunc(emptyObject) === emptyObject) isInputSameAsOutput = true;
        } catch  {}
        if (isInputSameAsOutput) {
            let stack = void 0;
            try {
                throw new Error();
            } catch (e) {
                ;
                ({ stack } = e);
            }
            console.warn("The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.", {
                stack
            });
        }
    }
};
// src/devModeChecks/inputStabilityCheck.ts
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs)=>{
    const { memoize, memoizeOptions } = options;
    const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
    const createAnEmptyObject = memoize(()=>({}), ...memoizeOptions);
    const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
    if (!areInputSelectorResultsEqual) {
        let stack = void 0;
        try {
            throw new Error();
        } catch (e) {
            ;
            ({ stack } = e);
        }
        console.warn("An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`", {
            arguments: inputSelectorArgs,
            firstInputs: inputSelectorResults,
            secondInputs: inputSelectorResultsCopy,
            stack
        });
    }
};
// src/devModeChecks/setGlobalDevModeChecks.ts
var globalDevModeChecks = {
    inputStabilityCheck: "once",
    identityFunctionCheck: "once"
};
var setGlobalDevModeChecks = (devModeChecks)=>{
    Object.assign(globalDevModeChecks, devModeChecks);
};
// src/utils.ts
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
    if (typeof func !== "function") {
        throw new TypeError(errorMessage);
    }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
    if (typeof object !== "object") {
        throw new TypeError(errorMessage);
    }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
    if (!array.every((item)=>typeof item === "function")) {
        const itemTypes = array.map((item)=>typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item).join(", ");
        throw new TypeError(`${errorMessage}[${itemTypes}]`);
    }
}
var ensureIsArray = (item)=>{
    return Array.isArray(item) ? item : [
        item
    ];
};
function getDependencies(createSelectorArgs) {
    const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
    assertIsArrayOfFunctions(dependencies, `createSelector expects all input-selectors to be functions, but received the following types: `);
    return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
    const inputSelectorResults = [];
    const { length } = dependencies;
    for(let i = 0; i < length; i++){
        inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
    }
    return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks)=>{
    const { identityFunctionCheck, inputStabilityCheck } = {
        ...globalDevModeChecks,
        ...devModeChecks
    };
    return {
        identityFunctionCheck: {
            shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
            run: runIdentityFunctionCheck
        },
        inputStabilityCheck: {
            shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
            run: runInputStabilityCheck
        }
    };
};
// src/autotrackMemoize/autotracking.ts
var $REVISION = 0;
var CURRENT_TRACKER = null;
var Cell = class {
    revision = $REVISION;
    _value;
    _lastValue;
    _isEqual = tripleEq;
    constructor(initialValue, isEqual = tripleEq){
        this._value = this._lastValue = initialValue;
        this._isEqual = isEqual;
    }
    // Whenever a storage value is read, it'll add itself to the current tracker if
    // one exists, entangling its state with that cache.
    get value() {
        CURRENT_TRACKER?.add(this);
        return this._value;
    }
    // Whenever a storage value is updated, we bump the global revision clock,
    // assign the revision for this storage to the new value, _and_ we schedule a
    // rerender. This is important, and it's what makes autotracking  _pull_
    // based. We don't actively tell the caches which depend on the storage that
    // anything has happened. Instead, we recompute the caches when needed.
    set value(newValue) {
        if (this.value === newValue) return;
        this._value = newValue;
        this.revision = ++$REVISION;
    }
};
function tripleEq(a, b) {
    return a === b;
}
var TrackingCache = class {
    _cachedValue;
    _cachedRevision = -1;
    _deps = [];
    hits = 0;
    fn;
    constructor(fn){
        this.fn = fn;
    }
    clear() {
        this._cachedValue = void 0;
        this._cachedRevision = -1;
        this._deps = [];
        this.hits = 0;
    }
    get value() {
        if (this.revision > this._cachedRevision) {
            const { fn } = this;
            const currentTracker = /* @__PURE__ */ new Set();
            const prevTracker = CURRENT_TRACKER;
            CURRENT_TRACKER = currentTracker;
            this._cachedValue = fn();
            CURRENT_TRACKER = prevTracker;
            this.hits++;
            this._deps = Array.from(currentTracker);
            this._cachedRevision = this.revision;
        }
        CURRENT_TRACKER?.add(this);
        return this._cachedValue;
    }
    get revision() {
        return Math.max(...this._deps.map((d)=>d.revision), 0);
    }
};
function getValue(cell) {
    if (!(cell instanceof Cell)) {
        console.warn("Not a valid cell! ", cell);
    }
    return cell.value;
}
function setValue(storage, value) {
    if (!(storage instanceof Cell)) {
        throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");
    }
    storage.value = storage._lastValue = value;
}
function createCell(initialValue, isEqual = tripleEq) {
    return new Cell(initialValue, isEqual);
}
function createCache(fn) {
    assertIsFunction(fn, "the first parameter to `createCache` must be a function");
    return new TrackingCache(fn);
}
// src/autotrackMemoize/tracking.ts
var neverEq = (a, b)=>false;
function createTag() {
    return createCell(null, neverEq);
}
function dirtyTag(tag, value) {
    setValue(tag, value);
}
var consumeCollection = (node)=>{
    let tag = node.collectionTag;
    if (tag === null) {
        tag = node.collectionTag = createTag();
    }
    getValue(tag);
};
var dirtyCollection = (node)=>{
    const tag = node.collectionTag;
    if (tag !== null) {
        dirtyTag(tag, null);
    }
};
// src/autotrackMemoize/proxy.ts
var REDUX_PROXY_LABEL = Symbol();
var nextId = 0;
var proto = Object.getPrototypeOf({});
var ObjectTreeNode = class {
    constructor(value){
        this.value = value;
        this.value = value;
        this.tag.value = value;
    }
    proxy = new Proxy(this, objectProxyHandler);
    tag = createTag();
    tags = {};
    children = {};
    collectionTag = null;
    id = nextId++;
};
var objectProxyHandler = {
    get (node, key) {
        function calculateResult() {
            const { value } = node;
            const childValue = Reflect.get(value, key);
            if (typeof key === "symbol") {
                return childValue;
            }
            if (key in proto) {
                return childValue;
            }
            if (typeof childValue === "object" && childValue !== null) {
                let childNode = node.children[key];
                if (childNode === void 0) {
                    childNode = node.children[key] = createNode(childValue);
                }
                if (childNode.tag) {
                    getValue(childNode.tag);
                }
                return childNode.proxy;
            } else {
                let tag = node.tags[key];
                if (tag === void 0) {
                    tag = node.tags[key] = createTag();
                    tag.value = childValue;
                }
                getValue(tag);
                return childValue;
            }
        }
        const res = calculateResult();
        return res;
    },
    ownKeys (node) {
        consumeCollection(node);
        return Reflect.ownKeys(node.value);
    },
    getOwnPropertyDescriptor (node, prop) {
        return Reflect.getOwnPropertyDescriptor(node.value, prop);
    },
    has (node, prop) {
        return Reflect.has(node.value, prop);
    }
};
var ArrayTreeNode = class {
    constructor(value){
        this.value = value;
        this.value = value;
        this.tag.value = value;
    }
    proxy = new Proxy([
        this
    ], arrayProxyHandler);
    tag = createTag();
    tags = {};
    children = {};
    collectionTag = null;
    id = nextId++;
};
var arrayProxyHandler = {
    get ([node], key) {
        if (key === "length") {
            consumeCollection(node);
        }
        return objectProxyHandler.get(node, key);
    },
    ownKeys ([node]) {
        return objectProxyHandler.ownKeys(node);
    },
    getOwnPropertyDescriptor ([node], prop) {
        return objectProxyHandler.getOwnPropertyDescriptor(node, prop);
    },
    has ([node], prop) {
        return objectProxyHandler.has(node, prop);
    }
};
function createNode(value) {
    if (Array.isArray(value)) {
        return new ArrayTreeNode(value);
    }
    return new ObjectTreeNode(value);
}
function updateNode(node, newValue) {
    const { value, tags, children } = node;
    node.value = newValue;
    if (Array.isArray(value) && Array.isArray(newValue) && value.length !== newValue.length) {
        dirtyCollection(node);
    } else {
        if (value !== newValue) {
            let oldKeysSize = 0;
            let newKeysSize = 0;
            let anyKeysAdded = false;
            for(const _key in value){
                oldKeysSize++;
            }
            for(const key in newValue){
                newKeysSize++;
                if (!(key in value)) {
                    anyKeysAdded = true;
                    break;
                }
            }
            const isDifferent = anyKeysAdded || oldKeysSize !== newKeysSize;
            if (isDifferent) {
                dirtyCollection(node);
            }
        }
    }
    for(const key in tags){
        const childValue = value[key];
        const newChildValue = newValue[key];
        if (childValue !== newChildValue) {
            dirtyCollection(node);
            dirtyTag(tags[key], newChildValue);
        }
        if (typeof newChildValue === "object" && newChildValue !== null) {
            delete tags[key];
        }
    }
    for(const key in children){
        const childNode = children[key];
        const newChildValue = newValue[key];
        const childValue = childNode.value;
        if (childValue === newChildValue) {
            continue;
        } else if (typeof newChildValue === "object" && newChildValue !== null) {
            updateNode(childNode, newChildValue);
        } else {
            deleteNode(childNode);
            delete children[key];
        }
    }
}
function deleteNode(node) {
    if (node.tag) {
        dirtyTag(node.tag, null);
    }
    dirtyCollection(node);
    for(const key in node.tags){
        dirtyTag(node.tags[key], null);
    }
    for(const key in node.children){
        deleteNode(node.children[key]);
    }
}
// src/lruMemoize.ts
function createSingletonCache(equals) {
    let entry;
    return {
        get (key) {
            if (entry && equals(entry.key, key)) {
                return entry.value;
            }
            return NOT_FOUND;
        },
        put (key, value) {
            entry = {
                key,
                value
            };
        },
        getEntries () {
            return entry ? [
                entry
            ] : [];
        },
        clear () {
            entry = void 0;
        }
    };
}
function createLruCache(maxSize, equals) {
    let entries = [];
    function get(key) {
        const cacheIndex = entries.findIndex((entry)=>equals(key, entry.key));
        if (cacheIndex > -1) {
            const entry = entries[cacheIndex];
            if (cacheIndex > 0) {
                entries.splice(cacheIndex, 1);
                entries.unshift(entry);
            }
            return entry.value;
        }
        return NOT_FOUND;
    }
    function put(key, value) {
        if (get(key) === NOT_FOUND) {
            entries.unshift({
                key,
                value
            });
            if (entries.length > maxSize) {
                entries.pop();
            }
        }
    }
    function getEntries() {
        return entries;
    }
    function clear() {
        entries = [];
    }
    return {
        get,
        put,
        getEntries,
        clear
    };
}
var referenceEqualityCheck = (a, b)=>a === b;
function createCacheKeyComparator(equalityCheck) {
    return function areArgumentsShallowlyEqual(prev, next) {
        if (prev === null || next === null || prev.length !== next.length) {
            return false;
        }
        const { length } = prev;
        for(let i = 0; i < length; i++){
            if (!equalityCheck(prev[i], next[i])) {
                return false;
            }
        }
        return true;
    };
}
function lruMemoize(func, equalityCheckOrOptions) {
    const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
        equalityCheck: equalityCheckOrOptions
    };
    const { equalityCheck = referenceEqualityCheck, maxSize = 1, resultEqualityCheck } = providedOptions;
    const comparator = createCacheKeyComparator(equalityCheck);
    let resultsCount = 0;
    const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
    function memoized() {
        let value = cache.get(arguments);
        if (value === NOT_FOUND) {
            value = func.apply(null, arguments);
            resultsCount++;
            if (resultEqualityCheck) {
                const entries = cache.getEntries();
                const matchingEntry = entries.find((entry)=>resultEqualityCheck(entry.value, value));
                if (matchingEntry) {
                    value = matchingEntry.value;
                    resultsCount !== 0 && resultsCount--;
                }
            }
            cache.put(arguments, value);
        }
        return value;
    }
    memoized.clearCache = ()=>{
        cache.clear();
        memoized.resetResultsCount();
    };
    memoized.resultsCount = ()=>resultsCount;
    memoized.resetResultsCount = ()=>{
        resultsCount = 0;
    };
    return memoized;
}
// src/autotrackMemoize/autotrackMemoize.ts
function autotrackMemoize(func) {
    const node = createNode([]);
    let lastArgs = null;
    const shallowEqual = createCacheKeyComparator(referenceEqualityCheck);
    const cache = createCache(()=>{
        const res = func.apply(null, node.proxy);
        return res;
    });
    function memoized() {
        if (!shallowEqual(lastArgs, arguments)) {
            updateNode(node, arguments);
            lastArgs = arguments;
        }
        return cache.value;
    }
    memoized.clearCache = ()=>{
        return cache.clear();
    };
    return memoized;
}
// src/weakMapMemoize.ts
var StrongRef = class {
    constructor(value){
        this.value = value;
    }
    deref() {
        return this.value;
    }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
    return {
        s: UNTERMINATED,
        v: void 0,
        o: null,
        p: null
    };
}
function weakMapMemoize(func, options = {}) {
    let fnNode = createCacheNode();
    const { resultEqualityCheck } = options;
    let lastResult;
    let resultsCount = 0;
    function memoized() {
        let cacheNode = fnNode;
        const { length } = arguments;
        for(let i = 0, l = length; i < l; i++){
            const arg = arguments[i];
            if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
                let objectCache = cacheNode.o;
                if (objectCache === null) {
                    cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
                }
                const objectNode = objectCache.get(arg);
                if (objectNode === void 0) {
                    cacheNode = createCacheNode();
                    objectCache.set(arg, cacheNode);
                } else {
                    cacheNode = objectNode;
                }
            } else {
                let primitiveCache = cacheNode.p;
                if (primitiveCache === null) {
                    cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
                }
                const primitiveNode = primitiveCache.get(arg);
                if (primitiveNode === void 0) {
                    cacheNode = createCacheNode();
                    primitiveCache.set(arg, cacheNode);
                } else {
                    cacheNode = primitiveNode;
                }
            }
        }
        const terminatedNode = cacheNode;
        let result;
        if (cacheNode.s === TERMINATED) {
            result = cacheNode.v;
        } else {
            result = func.apply(null, arguments);
            resultsCount++;
            if (resultEqualityCheck) {
                const lastResultValue = lastResult?.deref?.() ?? lastResult;
                if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
                    result = lastResultValue;
                    resultsCount !== 0 && resultsCount--;
                }
                const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
                lastResult = needsWeakRef ? new Ref(result) : result;
            }
        }
        terminatedNode.s = TERMINATED;
        terminatedNode.v = result;
        return result;
    }
    memoized.clearCache = ()=>{
        fnNode = createCacheNode();
        memoized.resetResultsCount();
    };
    memoized.resultsCount = ()=>resultsCount;
    memoized.resetResultsCount = ()=>{
        resultsCount = 0;
    };
    return memoized;
}
// src/createSelectorCreator.ts
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
    const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
        memoize: memoizeOrOptions,
        memoizeOptions: memoizeOptionsFromArgs
    } : memoizeOrOptions;
    const createSelector2 = (...createSelectorArgs)=>{
        let recomputations = 0;
        let dependencyRecomputations = 0;
        let lastResult;
        let directlyPassedOptions = {};
        let resultFunc = createSelectorArgs.pop();
        if (typeof resultFunc === "object") {
            directlyPassedOptions = resultFunc;
            resultFunc = createSelectorArgs.pop();
        }
        assertIsFunction(resultFunc, `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`);
        const combinedOptions = {
            ...createSelectorCreatorOptions,
            ...directlyPassedOptions
        };
        const { memoize, memoizeOptions = [], argsMemoize = weakMapMemoize, argsMemoizeOptions = [], devModeChecks = {} } = combinedOptions;
        const finalMemoizeOptions = ensureIsArray(memoizeOptions);
        const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
        const dependencies = getDependencies(createSelectorArgs);
        const memoizedResultFunc = memoize(function recomputationWrapper() {
            recomputations++;
            return resultFunc.apply(null, arguments);
        }, ...finalMemoizeOptions);
        let firstRun = true;
        const selector = argsMemoize(function dependenciesChecker() {
            dependencyRecomputations++;
            const inputSelectorResults = collectInputSelectorResults(dependencies, arguments);
            lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
            if ("TURBOPACK compile-time truthy", 1) {
                const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
                if (identityFunctionCheck.shouldRun) {
                    identityFunctionCheck.run(resultFunc, inputSelectorResults, lastResult);
                }
                if (inputStabilityCheck.shouldRun) {
                    const inputSelectorResultsCopy = collectInputSelectorResults(dependencies, arguments);
                    inputStabilityCheck.run({
                        inputSelectorResults,
                        inputSelectorResultsCopy
                    }, {
                        memoize,
                        memoizeOptions: finalMemoizeOptions
                    }, arguments);
                }
                if (firstRun) firstRun = false;
            }
            return lastResult;
        }, ...finalArgsMemoizeOptions);
        return Object.assign(selector, {
            resultFunc,
            memoizedResultFunc,
            dependencies,
            dependencyRecomputations: ()=>dependencyRecomputations,
            resetDependencyRecomputations: ()=>{
                dependencyRecomputations = 0;
            },
            lastResult: ()=>lastResult,
            recomputations: ()=>recomputations,
            resetRecomputations: ()=>{
                recomputations = 0;
            },
            memoize,
            argsMemoize
        });
    };
    Object.assign(createSelector2, {
        withTypes: ()=>createSelector2
    });
    return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
// src/createStructuredSelector.ts
var createStructuredSelector = Object.assign((inputSelectorsObject, selectorCreator = createSelector)=>{
    assertIsObject(inputSelectorsObject, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`);
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map((key)=>inputSelectorsObject[key]);
    const structuredSelector = selectorCreator(dependencies, (...inputSelectorResults)=>{
        return inputSelectorResults.reduce((composition, value, index)=>{
            composition[inputSelectorKeys[index]] = value;
            return composition;
        }, {});
    });
    return structuredSelector;
}, {
    withTypes: ()=>createStructuredSelector
});
;
 //# sourceMappingURL=reselect.mjs.map
}),
"[project]/client/node_modules/redux/dist/redux.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/formatProdErrorMessage.ts
__turbopack_context__.s([
    "__DO_NOT_USE__ActionTypes",
    ()=>actionTypes_default,
    "applyMiddleware",
    ()=>applyMiddleware,
    "bindActionCreators",
    ()=>bindActionCreators,
    "combineReducers",
    ()=>combineReducers,
    "compose",
    ()=>compose,
    "createStore",
    ()=>createStore,
    "isAction",
    ()=>isAction,
    "isPlainObject",
    ()=>isPlainObject,
    "legacy_createStore",
    ()=>legacy_createStore
]);
function formatProdErrorMessage(code) {
    return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
// src/utils/symbol-observable.ts
var $$observable = /* @__PURE__ */ (()=>typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
// src/utils/actionTypes.ts
var randomString = ()=>Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
    INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
    REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
    PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;
// src/utils/isPlainObject.ts
function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    let proto = obj;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
// src/utils/kindOf.ts
function miniKindOf(val) {
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    const type = typeof val;
    switch(type){
        case "boolean":
        case "string":
        case "number":
        case "symbol":
        case "function":
            {
                return type;
            }
    }
    if (Array.isArray(val)) return "array";
    if (isDate(val)) return "date";
    if (isError(val)) return "error";
    const constructorName = ctorName(val);
    switch(constructorName){
        case "Symbol":
        case "Promise":
        case "WeakMap":
        case "WeakSet":
        case "Map":
        case "Set":
            return constructorName;
    }
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
    let typeOfVal = typeof val;
    if ("TURBOPACK compile-time truthy", 1) {
        typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
}
// src/createStore.ts
function createStore(reducer, preloadedState, enhancer) {
    if (typeof reducer !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
    }
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    }
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
        enhancer = preloadedState;
        preloadedState = void 0;
    }
    if (typeof enhancer !== "undefined") {
        if (typeof enhancer !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
        }
        return enhancer(createStore)(reducer, preloadedState);
    }
    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = /* @__PURE__ */ new Map();
    let nextListeners = currentListeners;
    let listenerIdCounter = 0;
    let isDispatching = false;
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = /* @__PURE__ */ new Map();
            currentListeners.forEach((listener, key)=>{
                nextListeners.set(key, listener);
            });
        }
    }
    function getState() {
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        }
        return currentState;
    }
    function subscribe(listener) {
        if (typeof listener !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
        }
        let isSubscribed = true;
        ensureCanMutateNextListeners();
        const listenerId = listenerIdCounter++;
        nextListeners.set(listenerId, listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            if (isDispatching) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            nextListeners.delete(listenerId);
            currentListeners = null;
        };
    }
    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
        }
        if (typeof action.type === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        }
        if (typeof action.type !== "string") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Reducers may not dispatch actions.");
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        const listeners = currentListeners = nextListeners;
        listeners.forEach((listener)=>{
            listener();
        });
        return action;
    }
    function replaceReducer(nextReducer) {
        if (typeof nextReducer !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
        }
        currentReducer = nextReducer;
        dispatch({
            type: actionTypes_default.REPLACE
        });
    }
    function observable() {
        const outerSubscribe = subscribe;
        return {
            /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe (observer) {
                if (typeof observer !== "object" || observer === null) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
                }
                function observeState() {
                    const observerAsObserver = observer;
                    if (observerAsObserver.next) {
                        observerAsObserver.next(getState());
                    }
                }
                observeState();
                const unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe
                };
            },
            [symbol_observable_default] () {
                return this;
            }
        };
    }
    dispatch({
        type: actionTypes_default.INIT
    });
    const store = {
        dispatch,
        subscribe,
        getState,
        replaceReducer,
        [symbol_observable_default]: observable
    };
    return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
    return createStore(reducer, preloadedState, enhancer);
}
// src/utils/warning.ts
function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
        console.error(message);
    }
    try {
        throw new Error(message);
    } catch (e) {}
}
// src/combineReducers.ts
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    const reducerKeys = Object.keys(reducers);
    const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
    if (reducerKeys.length === 0) {
        return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    }
    if (!isPlainObject(inputState)) {
        return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
    }
    const unexpectedKeys = Object.keys(inputState).filter((key)=>!reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
    unexpectedKeys.forEach((key)=>{
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === actionTypes_default.REPLACE) return;
    if (unexpectedKeys.length > 0) {
        return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
    }
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach((key)=>{
        const reducer = reducers[key];
        const initialState = reducer(void 0, {
            type: actionTypes_default.INIT
        });
        if (typeof initialState === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
        }
        if (typeof reducer(void 0, {
            type: actionTypes_default.PROBE_UNKNOWN_ACTION()
        }) === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
        }
    });
}
function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};
    for(let i = 0; i < reducerKeys.length; i++){
        const key = reducerKeys[i];
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof reducers[key] === "undefined") {
                warning(`No reducer provided for key "${key}"`);
            }
        }
        if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
        }
    }
    const finalReducerKeys = Object.keys(finalReducers);
    let unexpectedKeyCache;
    if (("TURBOPACK compile-time value", "development") !== "production") {
        unexpectedKeyCache = {};
    }
    let shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state = {}, action) {
        if (shapeAssertionError) {
            throw shapeAssertionError;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
                warning(warningMessage);
            }
        }
        let hasChanged = false;
        const nextState = {};
        for(let i = 0; i < finalReducerKeys.length; i++){
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
                const actionType = action && action.type;
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
            }
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
// src/bindActionCreators.ts
function bindActionCreator(actionCreator, dispatch) {
    return function(...args) {
        return dispatch(actionCreator.apply(this, args));
    };
}
function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === "function") {
        return bindActionCreator(actionCreators, dispatch);
    }
    if (typeof actionCreators !== "object" || actionCreators === null) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `bindActionCreators expected an object or a function, but instead received: '${kindOf(actionCreators)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
    }
    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    return boundActionCreators;
}
// src/compose.ts
function compose(...funcs) {
    if (funcs.length === 0) {
        return (arg)=>arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b)=>(...args)=>a(b(...args)));
}
// src/applyMiddleware.ts
function applyMiddleware(...middlewares) {
    return (createStore2)=>(reducer, preloadedState)=>{
            const store = createStore2(reducer, preloadedState);
            let dispatch = ()=>{
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            };
            const middlewareAPI = {
                getState: store.getState,
                dispatch: (action, ...args)=>dispatch(action, ...args)
            };
            const chain = middlewares.map((middleware)=>middleware(middlewareAPI));
            dispatch = compose(...chain)(store.dispatch);
            return {
                ...store,
                dispatch
            };
        };
}
// src/utils/isAction.ts
function isAction(action) {
    return isPlainObject(action) && "type" in action && typeof action.type === "string";
}
;
 //# sourceMappingURL=redux.mjs.map
}),
"[project]/client/node_modules/redux-thunk/dist/redux-thunk.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "thunk",
    ()=>thunk,
    "withExtraArgument",
    ()=>withExtraArgument
]);
function createThunkMiddleware(extraArgument) {
    const middleware = ({ dispatch, getState })=>(next)=>(action)=>{
                if (typeof action === "function") {
                    return action(dispatch, getState, extraArgument);
                }
                return next(action);
            };
    return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;
;
}),
"[project]/client/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "ReducerType",
    ()=>ReducerType,
    "SHOULD_AUTOBATCH",
    ()=>SHOULD_AUTOBATCH,
    "TaskAbortError",
    ()=>TaskAbortError,
    "Tuple",
    ()=>Tuple,
    "addListener",
    ()=>addListener,
    "asyncThunkCreator",
    ()=>asyncThunkCreator,
    "autoBatchEnhancer",
    ()=>autoBatchEnhancer,
    "buildCreateSlice",
    ()=>buildCreateSlice,
    "clearAllListeners",
    ()=>clearAllListeners,
    "combineSlices",
    ()=>combineSlices,
    "configureStore",
    ()=>configureStore,
    "createAction",
    ()=>createAction,
    "createActionCreatorInvariantMiddleware",
    ()=>createActionCreatorInvariantMiddleware,
    "createAsyncThunk",
    ()=>createAsyncThunk,
    "createDraftSafeSelector",
    ()=>createDraftSafeSelector,
    "createDraftSafeSelectorCreator",
    ()=>createDraftSafeSelectorCreator,
    "createDynamicMiddleware",
    ()=>createDynamicMiddleware,
    "createEntityAdapter",
    ()=>createEntityAdapter,
    "createImmutableStateInvariantMiddleware",
    ()=>createImmutableStateInvariantMiddleware,
    "createListenerMiddleware",
    ()=>createListenerMiddleware,
    "createReducer",
    ()=>createReducer,
    "createSerializableStateInvariantMiddleware",
    ()=>createSerializableStateInvariantMiddleware,
    "createSlice",
    ()=>createSlice,
    "findNonSerializableValue",
    ()=>findNonSerializableValue,
    "formatProdErrorMessage",
    ()=>formatProdErrorMessage,
    "isActionCreator",
    ()=>isActionCreator,
    "isAllOf",
    ()=>isAllOf,
    "isAnyOf",
    ()=>isAnyOf,
    "isAsyncThunkAction",
    ()=>isAsyncThunkAction,
    "isFluxStandardAction",
    ()=>isFSA,
    "isFulfilled",
    ()=>isFulfilled,
    "isImmutableDefault",
    ()=>isImmutableDefault,
    "isPending",
    ()=>isPending,
    "isPlain",
    ()=>isPlain,
    "isRejected",
    ()=>isRejected,
    "isRejectedWithValue",
    ()=>isRejectedWithValue,
    "miniSerializeError",
    ()=>miniSerializeError,
    "nanoid",
    ()=>nanoid,
    "prepareAutoBatched",
    ()=>prepareAutoBatched,
    "removeListener",
    ()=>removeListener,
    "unwrapResult",
    ()=>unwrapResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/immer/dist/immer.mjs [app-rsc] (ecmascript)");
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/reselect/dist/reselect.mjs [app-rsc] (ecmascript)");
// src/reduxImports.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/redux/dist/redux.mjs [app-rsc] (ecmascript)");
// src/getDefaultMiddleware.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/redux-thunk/dist/redux-thunk.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
// src/createDraftSafeSelector.ts
var createDraftSafeSelectorCreator = (...args)=>{
    const createSelector2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSelectorCreator"])(...args);
    const createDraftSafeSelector2 = Object.assign((...args2)=>{
        const selector = createSelector2(...args2);
        const wrappedSelector = (value, ...rest)=>selector((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraft"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["current"])(value) : value, ...rest);
        Object.assign(wrappedSelector, selector);
        return wrappedSelector;
    }, {
        withTypes: ()=>createDraftSafeSelector2
    });
    return createDraftSafeSelector2;
};
var createDraftSafeSelector = /* @__PURE__ */ createDraftSafeSelectorCreator(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$reselect$2f$dist$2f$reselect$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["weakMapMemoize"]);
;
// src/devtoolsExtension.ts
var composeWithDevTools = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function() {
    if (arguments.length === 0) return void 0;
    if (typeof arguments[0] === "object") return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compose"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compose"].apply(null, arguments);
};
var devToolsEnhancer = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function() {
    return function(noop3) {
        return noop3;
    };
};
;
// src/tsHelpers.ts
var hasMatchFunction = (v)=>{
    return v && typeof v.match === "function";
};
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator(...args) {
        if (prepareAction) {
            let prepared = prepareAction(...args);
            if (!prepared) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "prepareAction did not return an object");
            }
            return {
                type,
                payload: prepared.payload,
                ..."meta" in prepared && {
                    meta: prepared.meta
                },
                ..."error" in prepared && {
                    error: prepared.error
                }
            };
        }
        return {
            type,
            payload: args[0]
        };
    }
    actionCreator.toString = ()=>`${type}`;
    actionCreator.type = type;
    actionCreator.match = (action)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAction"])(action) && action.type === type;
    return actionCreator;
}
function isActionCreator(action) {
    return typeof action === "function" && "type" in action && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
    hasMatchFunction(action);
}
function isFSA(action) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAction"])(action) && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return [
        "type",
        "payload",
        "error",
        "meta"
    ].indexOf(key) > -1;
}
// src/actionCreatorInvariantMiddleware.ts
function getMessage(type) {
    const splitType = type ? `${type}`.split("/") : [];
    const actionName = splitType[splitType.length - 1] || "actionCreator";
    return `Detected an action creator with type "${type || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${actionName}())\` instead of \`dispatch(${actionName})\`. This is necessary even if the action has no payload.`;
}
function createActionCreatorInvariantMiddleware(options = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { isActionCreator: isActionCreator2 = isActionCreator } = options;
    return ()=>(next)=>(action)=>{
                if (isActionCreator2(action)) {
                    console.warn(getMessage(action.type));
                }
                return next(action);
            };
}
// src/utils.ts
function getTimeMeasureUtils(maxDelay, fnName) {
    let elapsed = 0;
    return {
        measureTime (fn) {
            const started = Date.now();
            try {
                return fn();
            } finally{
                const finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded () {
            if (elapsed > maxDelay) {
                console.warn(`${fnName} took ${elapsed}ms, which is more than the warning threshold of ${maxDelay}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
            }
        }
    };
}
var Tuple = class _Tuple extends Array {
    constructor(...items){
        super(...items);
        Object.setPrototypeOf(this, _Tuple.prototype);
    }
    static get [Symbol.species]() {
        return _Tuple;
    }
    concat(...arr) {
        return super.concat.apply(this, arr);
    }
    prepend(...arr) {
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new _Tuple(...arr[0].concat(this));
        }
        return new _Tuple(...arr.concat(this));
    }
};
function freezeDraftable(val) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraftable"])(val) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produce"])(val, ()=>{}) : val;
}
function getOrInsertComputed(map, key, compute) {
    if (map.has(key)) return map.get(key);
    return map.set(key, compute(key)).get(key);
}
// src/immutableStateInvariantMiddleware.ts
function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    const trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations () {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignorePaths = [], obj, path = "", checkedObjects = /* @__PURE__ */ new Set()) {
    const tracked = {
        value: obj
    };
    if (!isImmutable(obj) && !checkedObjects.has(obj)) {
        checkedObjects.add(obj);
        tracked.children = {};
        for(const key in obj){
            const childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignoredPaths = [], trackedProperty, obj, sameParentRef = false, path = "") {
    const prevObj = trackedProperty ? trackedProperty.value : void 0;
    const sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return {
            wasMutated: true,
            path
        };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return {
            wasMutated: false
        };
    }
    const keysToDetect = {};
    for(let key in trackedProperty.children){
        keysToDetect[key] = true;
    }
    for(let key in obj){
        keysToDetect[key] = true;
    }
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for(let key in keysToDetect){
        const nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            const hasMatches = ignoredPaths.some((ignored)=>{
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                continue;
            }
        }
        const result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
        if (result.wasMutated) {
            return result;
        }
    }
    return {
        wasMutated: false
    };
}
function createImmutableStateInvariantMiddleware(options = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        let stringify2 = function(obj, serializer, indent, decycler) {
            return JSON.stringify(obj, getSerialize2(serializer, decycler), indent);
        }, getSerialize2 = function(serializer, decycler) {
            let stack = [], keys = [];
            if (!decycler) decycler = function(_, value) {
                if (stack[0] === value) return "[Circular ~]";
                return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
            };
            return function(key, value) {
                if (stack.length > 0) {
                    var thisPos = stack.indexOf(this);
                    ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
                    ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
                    if (~stack.indexOf(value)) value = decycler.call(this, key, value);
                } else stack.push(value);
                return serializer == null ? value : serializer.call(this, key, value);
            };
        };
        var stringify = stringify2, getSerialize = getSerialize2;
        let { isImmutable = isImmutableDefault, ignoredPaths, warnAfter = 32 } = options;
        const track = trackForMutations.bind(null, isImmutable, ignoredPaths);
        return ({ getState })=>{
            let state = getState();
            let tracker = track(state);
            let result;
            return (next)=>(action)=>{
                    const measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
                    measureUtils.measureTime(()=>{
                        state = getState();
                        result = tracker.detectMutations();
                        tracker = track(state);
                        if (result.wasMutated) {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `A state mutation was detected between dispatches, in the path '${result.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
                        }
                    });
                    const dispatchedAction = next(action);
                    measureUtils.measureTime(()=>{
                        state = getState();
                        result = tracker.detectMutations();
                        tracker = track(state);
                        if (result.wasMutated) {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `A state mutation was detected inside a dispatch, in the path: ${result.path || ""}. Take a look at the reducer(s) handling the action ${stringify2(action)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
                        }
                    });
                    measureUtils.warnIfExceeded();
                    return dispatchedAction;
                };
        };
    }
}
// src/serializableStateInvariantMiddleware.ts
function isPlain(val) {
    const type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(val);
}
function findNonSerializableValue(value, path = "", isSerializable = isPlain, getEntries, ignoredPaths = [], cache) {
    let foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (cache?.has(value)) return false;
    const entries = getEntries != null ? getEntries(value) : Object.entries(value);
    const hasIgnoredPaths = ignoredPaths.length > 0;
    for (const [key, nestedValue] of entries){
        const nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            const hasMatches = ignoredPaths.some((ignored)=>{
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                continue;
            }
        }
        if (!isSerializable(nestedValue)) {
            return {
                keyPath: nestedPath,
                value: nestedValue
            };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
            if (foundNestedSerializable) {
                return foundNestedSerializable;
            }
        }
    }
    if (cache && isNestedFrozen(value)) cache.add(value);
    return false;
}
function isNestedFrozen(value) {
    if (!Object.isFrozen(value)) return false;
    for (const nestedValue of Object.values(value)){
        if (typeof nestedValue !== "object" || nestedValue === null) continue;
        if (!isNestedFrozen(nestedValue)) return false;
    }
    return true;
}
function createSerializableStateInvariantMiddleware(options = {}) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        const { isSerializable = isPlain, getEntries, ignoredActions = [], ignoredActionPaths = [
            "meta.arg",
            "meta.baseQueryMeta"
        ], ignoredPaths = [], warnAfter = 32, ignoreState = false, ignoreActions = false, disableCache = false } = options;
        const cache = !disableCache && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
        return (storeAPI)=>(next)=>(action)=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAction"])(action)) {
                        return next(action);
                    }
                    const result = next(action);
                    const measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
                    if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
                        measureUtils.measureTime(()=>{
                            const foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
                            if (foundActionNonSerializableValue) {
                                const { keyPath, value } = foundActionNonSerializableValue;
                                console.error(`A non-serializable value was detected in an action, in the path: \`${keyPath}\`. Value:`, value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                            }
                        });
                    }
                    if (!ignoreState) {
                        measureUtils.measureTime(()=>{
                            const state = storeAPI.getState();
                            const foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
                            if (foundStateNonSerializableValue) {
                                const { keyPath, value } = foundStateNonSerializableValue;
                                console.error(`A non-serializable value was detected in the state, in the path: \`${keyPath}\`. Value:`, value, `
Take a look at the reducer(s) handling this action type: ${action.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
                            }
                        });
                        measureUtils.warnIfExceeded();
                    }
                    return result;
                };
    }
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
var buildGetDefaultMiddleware = ()=>function getDefaultMiddleware(options) {
        const { thunk = true, immutableCheck = true, serializableCheck = true, actionCreatorCheck = true } = options ?? {};
        let middlewareArray = new Tuple();
        if (thunk) {
            if (isBoolean(thunk)) {
                middlewareArray.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["thunk"]);
            } else {
                middlewareArray.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2d$thunk$2f$dist$2f$redux$2d$thunk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withExtraArgument"])(thunk.extraArgument));
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (immutableCheck) {
                let immutableOptions = {};
                if (!isBoolean(immutableCheck)) {
                    immutableOptions = immutableCheck;
                }
                middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
            }
            if (serializableCheck) {
                let serializableOptions = {};
                if (!isBoolean(serializableCheck)) {
                    serializableOptions = serializableCheck;
                }
                middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
            }
            if (actionCreatorCheck) {
                let actionCreatorOptions = {};
                if (!isBoolean(actionCreatorCheck)) {
                    actionCreatorOptions = actionCreatorCheck;
                }
                middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
            }
        }
        return middlewareArray;
    };
// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = ()=>(payload)=>({
            payload,
            meta: {
                [SHOULD_AUTOBATCH]: true
            }
        });
var createQueueWithTimer = (timeout)=>{
    return (notify)=>{
        setTimeout(notify, timeout);
    };
};
var autoBatchEnhancer = (options = {
    type: "raf"
})=>(next)=>(...args)=>{
            const store = next(...args);
            let notifying = true;
            let shouldNotifyAtEndOfTick = false;
            let notificationQueued = false;
            const listeners = /* @__PURE__ */ new Set();
            const queueCallback = options.type === "tick" ? queueMicrotask : options.type === "raf" ? // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
            ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : createQueueWithTimer(10) : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
            const notifyListeners = ()=>{
                notificationQueued = false;
                if (shouldNotifyAtEndOfTick) {
                    shouldNotifyAtEndOfTick = false;
                    listeners.forEach((l)=>l());
                }
            };
            return Object.assign({}, store, {
                // Override the base `store.subscribe` method to keep original listeners
                // from running if we're delaying notifications
                subscribe (listener2) {
                    const wrappedListener = ()=>notifying && listener2();
                    const unsubscribe = store.subscribe(wrappedListener);
                    listeners.add(listener2);
                    return ()=>{
                        unsubscribe();
                        listeners.delete(listener2);
                    };
                },
                // Override the base `store.dispatch` method so that we can check actions
                // for the `shouldAutoBatch` flag and determine if batching is active
                dispatch (action) {
                    try {
                        notifying = !action?.meta?.[SHOULD_AUTOBATCH];
                        shouldNotifyAtEndOfTick = !notifying;
                        if (shouldNotifyAtEndOfTick) {
                            if (!notificationQueued) {
                                notificationQueued = true;
                                queueCallback(notifyListeners);
                            }
                        }
                        return store.dispatch(action);
                    } finally{
                        notifying = true;
                    }
                }
            });
        };
// src/getDefaultEnhancers.ts
var buildGetDefaultEnhancers = (middlewareEnhancer)=>function getDefaultEnhancers(options) {
        const { autoBatch = true } = options ?? {};
        let enhancerArray = new Tuple(middlewareEnhancer);
        if (autoBatch) {
            enhancerArray.push(autoBatchEnhancer(typeof autoBatch === "object" ? autoBatch : void 0));
        }
        return enhancerArray;
    };
// src/configureStore.ts
function configureStore(options) {
    const getDefaultMiddleware = buildGetDefaultMiddleware();
    const { reducer = void 0, middleware, devTools = true, duplicateMiddlewareCheck = true, preloadedState = void 0, enhancers = void 0 } = options || {};
    let rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(reducer)) {
        rootReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineReducers"])(reducer);
    } else {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && middleware && typeof middleware !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`middleware` field must be a callback");
    }
    let finalMiddleware;
    if (typeof middleware === "function") {
        finalMiddleware = middleware(getDefaultMiddleware);
        if (("TURBOPACK compile-time value", "development") !== "production" && !Array.isArray(finalMiddleware)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "when using a middleware builder function, an array of middleware must be returned");
        }
    } else {
        finalMiddleware = getDefaultMiddleware();
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && finalMiddleware.some((item)=>typeof item !== "function")) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "each middleware provided to configureStore must be a function");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && duplicateMiddlewareCheck) {
        let middlewareReferences = /* @__PURE__ */ new Set();
        finalMiddleware.forEach((middleware2)=>{
            if (middlewareReferences.has(middleware2)) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
            }
            middlewareReferences.add(middleware2);
        });
    }
    let finalCompose = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compose"];
    if (devTools) {
        finalCompose = composeWithDevTools({
            // Enable capture of stack traces for dispatched Redux actions
            trace: ("TURBOPACK compile-time value", "development") !== "production",
            ...typeof devTools === "object" && devTools
        });
    }
    const middlewareEnhancer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyMiddleware"])(...finalMiddleware);
    const getDefaultEnhancers = buildGetDefaultEnhancers(middlewareEnhancer);
    if (("TURBOPACK compile-time value", "development") !== "production" && enhancers && typeof enhancers !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`enhancers` field must be a callback");
    }
    let storeEnhancers = typeof enhancers === "function" ? enhancers(getDefaultEnhancers) : getDefaultEnhancers();
    if (("TURBOPACK compile-time value", "development") !== "production" && !Array.isArray(storeEnhancers)) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`enhancers` callback must return an array");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && storeEnhancers.some((item)=>typeof item !== "function")) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "each enhancer provided to configureStore must be a function");
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && finalMiddleware.length && !storeEnhancers.includes(middlewareEnhancer)) {
        console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
    }
    const composedEnhancer = finalCompose(...storeEnhancers);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStore"])(rootReducer, preloadedState, composedEnhancer);
}
// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    const actionsMap = {};
    const actionMatchers = [];
    let defaultCaseReducer;
    const builder = {
        addCase (typeOrActionCreator, reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (actionMatchers.length > 0) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (!type) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addCase` cannot be called with an empty action type");
            }
            if (type in actionsMap) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `\`builder.addCase\` cannot be called with two reducers for the same action type '${type}'`);
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addAsyncThunk (asyncThunk, reducers) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
                }
            }
            if (reducers.pending) actionsMap[asyncThunk.pending.type] = reducers.pending;
            if (reducers.rejected) actionsMap[asyncThunk.rejected.type] = reducers.rejected;
            if (reducers.fulfilled) actionsMap[asyncThunk.fulfilled.type] = reducers.fulfilled;
            if (reducers.settled) actionMatchers.push({
                matcher: asyncThunk.settled,
                reducer: reducers.settled
            });
            return builder;
        },
        addMatcher (matcher, reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({
                matcher,
                reducer
            });
            return builder;
        },
        addDefaultCase (reducer) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (defaultCaseReducer) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [
        actionsMap,
        actionMatchers,
        defaultCaseReducer
    ];
}
// src/createReducer.ts
(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setUseStrictIteration"])(false);
function isStateFunction(x) {
    return typeof x === "function";
}
function createReducer(initialState, mapOrBuilderCallback) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof mapOrBuilderCallback === "object") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
        }
    }
    let [actionsMap, finalActionMatchers, finalDefaultCaseReducer] = executeReducerBuilderCallback(mapOrBuilderCallback);
    let getInitialState;
    if (isStateFunction(initialState)) {
        getInitialState = ()=>freezeDraftable(initialState());
    } else {
        const frozenInitialState = freezeDraftable(initialState);
        getInitialState = ()=>frozenInitialState;
    }
    function reducer(state = getInitialState(), action) {
        let caseReducers = [
            actionsMap[action.type],
            ...finalActionMatchers.filter(({ matcher })=>matcher(action)).map(({ reducer: reducer2 })=>reducer2)
        ];
        if (caseReducers.filter((cr)=>!!cr).length === 0) {
            caseReducers = [
                finalDefaultCaseReducer
            ];
        }
        return caseReducers.reduce((previousState, caseReducer)=>{
            if (caseReducer) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraft"])(previousState)) {
                    const draft = previousState;
                    const result = caseReducer(draft, action);
                    if (result === void 0) {
                        return previousState;
                    }
                    return result;
                } else if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraftable"])(previousState)) {
                    const result = caseReducer(previousState, action);
                    if (result === void 0) {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                } else {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produce"])(previousState, (draft)=>{
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
// src/matchers.ts
var matches = (matcher, action)=>{
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    } else {
        return matcher(action);
    }
};
function isAnyOf(...matchers) {
    return (action)=>{
        return matchers.some((matcher)=>matches(matcher, action));
    };
}
function isAllOf(...matchers) {
    return (action)=>{
        return matchers.every((matcher)=>matches(matcher, action));
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta) return false;
    const hasValidRequestId = typeof action.meta.requestId === "string";
    const hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "pending"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.pending));
}
function isRejected(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "rejected"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.rejected));
}
function isRejectedWithValue(...asyncThunks) {
    const hasFlag = (action)=>{
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return isAllOf(isRejected(...asyncThunks), hasFlag);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return isAllOf(isRejected(...asyncThunks), hasFlag);
}
function isFulfilled(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "fulfilled"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.map((asyncThunk)=>asyncThunk.fulfilled));
}
function isAsyncThunkAction(...asyncThunks) {
    if (asyncThunks.length === 0) {
        return (action)=>hasExpectedRequestMetadata(action, [
                "pending",
                "fulfilled",
                "rejected"
            ]);
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return isAnyOf(...asyncThunks.flatMap((asyncThunk)=>[
            asyncThunk.pending,
            asyncThunk.rejected,
            asyncThunk.fulfilled
        ]));
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = (size = 21)=>{
    let id = "";
    let i = size;
    while(i--){
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = class {
    constructor(payload, meta){
        this.payload = payload;
        this.meta = meta;
    }
    /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */ _type;
};
var FulfillWithMeta = class {
    constructor(payload, meta){
        this.payload = payload;
        this.meta = meta;
    }
    /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */ _type;
};
var miniSerializeError = (value)=>{
    if (typeof value === "object" && value !== null) {
        const simpleError = {};
        for (const property of commonProperties){
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return {
        message: String(value)
    };
};
var externalAbortMessage = "External signal was aborted";
var createAsyncThunk = /* @__PURE__ */ (()=>{
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
        const fulfilled = createAction(typePrefix + "/fulfilled", (payload, requestId, arg, meta)=>({
                payload,
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    requestStatus: "fulfilled"
                }
            }));
        const pending = createAction(typePrefix + "/pending", (requestId, arg, meta)=>({
                payload: void 0,
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    requestStatus: "pending"
                }
            }));
        const rejected = createAction(typePrefix + "/rejected", (error, requestId, arg, payload, meta)=>({
                payload,
                error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
                meta: {
                    ...meta || {},
                    arg,
                    requestId,
                    rejectedWithValue: !!payload,
                    requestStatus: "rejected",
                    aborted: error?.name === "AbortError",
                    condition: error?.name === "ConditionError"
                }
            }));
        function actionCreator(arg, { signal } = {}) {
            return (dispatch, getState, extra)=>{
                const requestId = options?.idGenerator ? options.idGenerator(arg) : nanoid();
                const abortController = new AbortController();
                let abortHandler;
                let abortReason;
                function abort(reason) {
                    abortReason = reason;
                    abortController.abort();
                }
                if (signal) {
                    if (signal.aborted) {
                        abort(externalAbortMessage);
                    } else {
                        signal.addEventListener("abort", ()=>abort(externalAbortMessage), {
                            once: true
                        });
                    }
                }
                const promise = async function() {
                    let finalAction;
                    try {
                        let conditionResult = options?.condition?.(arg, {
                            getState,
                            extra
                        });
                        if (isThenable(conditionResult)) {
                            conditionResult = await conditionResult;
                        }
                        if (conditionResult === false || abortController.signal.aborted) {
                            throw {
                                name: "ConditionError",
                                message: "Aborted due to condition callback returning false."
                            };
                        }
                        const abortedPromise = new Promise((_, reject)=>{
                            abortHandler = ()=>{
                                reject({
                                    name: "AbortError",
                                    message: abortReason || "Aborted"
                                });
                            };
                            abortController.signal.addEventListener("abort", abortHandler);
                        });
                        dispatch(pending(requestId, arg, options?.getPendingMeta?.({
                            requestId,
                            arg
                        }, {
                            getState,
                            extra
                        })));
                        finalAction = await Promise.race([
                            abortedPromise,
                            Promise.resolve(payloadCreator(arg, {
                                dispatch,
                                getState,
                                extra,
                                requestId,
                                signal: abortController.signal,
                                abort,
                                rejectWithValue: (value, meta)=>{
                                    return new RejectWithValue(value, meta);
                                },
                                fulfillWithValue: (value, meta)=>{
                                    return new FulfillWithMeta(value, meta);
                                }
                            })).then((result)=>{
                                if (result instanceof RejectWithValue) {
                                    throw result;
                                }
                                if (result instanceof FulfillWithMeta) {
                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                }
                                return fulfilled(result, requestId, arg);
                            })
                        ]);
                    } catch (err) {
                        finalAction = err instanceof RejectWithValue ? rejected(null, requestId, arg, err.payload, err.meta) : rejected(err, requestId, arg);
                    } finally{
                        if (abortHandler) {
                            abortController.signal.removeEventListener("abort", abortHandler);
                        }
                    }
                    const skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                    if (!skipDispatch) {
                        dispatch(finalAction);
                    }
                    return finalAction;
                }();
                return Object.assign(promise, {
                    abort,
                    requestId,
                    arg,
                    unwrap () {
                        return promise.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending,
            rejected,
            fulfilled,
            settled: isAnyOf(rejected, fulfilled),
            typePrefix
        });
    }
    createAsyncThunk2.withTypes = ()=>createAsyncThunk2;
    return createAsyncThunk2;
})();
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/createSlice.ts
var asyncThunkSymbol = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
var asyncThunkCreator = {
    [asyncThunkSymbol]: createAsyncThunk
};
var ReducerType = /* @__PURE__ */ ((ReducerType2)=>{
    ReducerType2["reducer"] = "reducer";
    ReducerType2["reducerWithPrepare"] = "reducerWithPrepare";
    ReducerType2["asyncThunk"] = "asyncThunk";
    return ReducerType2;
})(ReducerType || {});
function getType(slice, actionKey) {
    return `${slice}/${actionKey}`;
}
function buildCreateSlice({ creators } = {}) {
    const cAT = creators?.asyncThunk?.[asyncThunkSymbol];
    return function createSlice2(options) {
        const { name, reducerPath = name } = options;
        if (!name) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`name` is a required option for createSlice");
        }
        if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
            if (options.initialState === void 0) {
                console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
            }
        }
        const reducers = (typeof options.reducers === "function" ? options.reducers(buildReducerCreators()) : options.reducers) || {};
        const reducerNames = Object.keys(reducers);
        const context = {
            sliceCaseReducersByName: {},
            sliceCaseReducersByType: {},
            actionCreators: {},
            sliceMatchers: []
        };
        const contextMethods = {
            addCase (typeOrActionCreator, reducer2) {
                const type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
                if (!type) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`context.addCase` cannot be called with an empty action type");
                }
                if (type in context.sliceCaseReducersByType) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "`context.addCase` cannot be called with two reducers for the same action type: " + type);
                }
                context.sliceCaseReducersByType[type] = reducer2;
                return contextMethods;
            },
            addMatcher (matcher, reducer2) {
                context.sliceMatchers.push({
                    matcher,
                    reducer: reducer2
                });
                return contextMethods;
            },
            exposeAction (name2, actionCreator) {
                context.actionCreators[name2] = actionCreator;
                return contextMethods;
            },
            exposeCaseReducer (name2, reducer2) {
                context.sliceCaseReducersByName[name2] = reducer2;
                return contextMethods;
            }
        };
        reducerNames.forEach((reducerName)=>{
            const reducerDefinition = reducers[reducerName];
            const reducerDetails = {
                reducerName,
                type: getType(name, reducerName),
                createNotation: typeof options.reducers === "function"
            };
            if (isAsyncThunkSliceReducerDefinition(reducerDefinition)) {
                handleThunkCaseReducerDefinition(reducerDetails, reducerDefinition, contextMethods, cAT);
            } else {
                handleNormalReducerDefinition(reducerDetails, reducerDefinition, contextMethods);
            }
        });
        function buildReducer() {
            if ("TURBOPACK compile-time truthy", 1) {
                if (typeof options.extraReducers === "object") {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
                }
            }
            const [extraReducers = {}, actionMatchers = [], defaultCaseReducer = void 0] = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [
                options.extraReducers
            ];
            const finalCaseReducers = {
                ...extraReducers,
                ...context.sliceCaseReducersByType
            };
            return createReducer(options.initialState, (builder)=>{
                for(let key in finalCaseReducers){
                    builder.addCase(key, finalCaseReducers[key]);
                }
                for (let sM of context.sliceMatchers){
                    builder.addMatcher(sM.matcher, sM.reducer);
                }
                for (let m of actionMatchers){
                    builder.addMatcher(m.matcher, m.reducer);
                }
                if (defaultCaseReducer) {
                    builder.addDefaultCase(defaultCaseReducer);
                }
            });
        }
        const selectSelf = (state)=>state;
        const injectedSelectorCache = /* @__PURE__ */ new Map();
        const injectedStateCache = /* @__PURE__ */ new WeakMap();
        let _reducer;
        function reducer(state, action) {
            if (!_reducer) _reducer = buildReducer();
            return _reducer(state, action);
        }
        function getInitialState() {
            if (!_reducer) _reducer = buildReducer();
            return _reducer.getInitialState();
        }
        function makeSelectorProps(reducerPath2, injected = false) {
            function selectSlice(state) {
                let sliceState = state[reducerPath2];
                if (typeof sliceState === "undefined") {
                    if (injected) {
                        sliceState = getOrInsertComputed(injectedStateCache, selectSlice, getInitialState);
                    } else if ("TURBOPACK compile-time truthy", 1) {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "selectSlice returned undefined for an uninjected slice reducer");
                    }
                }
                return sliceState;
            }
            function getSelectors(selectState = selectSelf) {
                const selectorCache = getOrInsertComputed(injectedSelectorCache, injected, ()=>/* @__PURE__ */ new WeakMap());
                return getOrInsertComputed(selectorCache, selectState, ()=>{
                    const map = {};
                    for (const [name2, selector] of Object.entries(options.selectors ?? {})){
                        map[name2] = wrapSelector(selector, selectState, ()=>getOrInsertComputed(injectedStateCache, selectState, getInitialState), injected);
                    }
                    return map;
                });
            }
            return {
                reducerPath: reducerPath2,
                getSelectors,
                get selectors () {
                    return getSelectors(selectSlice);
                },
                selectSlice
            };
        }
        const slice = {
            name,
            reducer,
            actions: context.actionCreators,
            caseReducers: context.sliceCaseReducersByName,
            getInitialState,
            ...makeSelectorProps(reducerPath),
            injectInto (injectable, { reducerPath: pathOpt, ...config } = {}) {
                const newReducerPath = pathOpt ?? reducerPath;
                injectable.inject({
                    reducerPath: newReducerPath,
                    reducer
                }, config);
                return {
                    ...slice,
                    ...makeSelectorProps(newReducerPath, true)
                };
            }
        };
        return slice;
    };
}
function wrapSelector(selector, selectState, getInitialState, injected) {
    function wrapper(rootState, ...args) {
        let sliceState = selectState(rootState);
        if (typeof sliceState === "undefined") {
            if (injected) {
                sliceState = getInitialState();
            } else if ("TURBOPACK compile-time truthy", 1) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "selectState returned undefined for an uninjected slice reducer");
            }
        }
        return selector(sliceState, ...args);
    }
    wrapper.unwrapped = selector;
    return wrapper;
}
var createSlice = /* @__PURE__ */ buildCreateSlice();
function buildReducerCreators() {
    function asyncThunk(payloadCreator, config) {
        return {
            _reducerDefinitionType: "asyncThunk" /* asyncThunk */ ,
            payloadCreator,
            ...config
        };
    }
    asyncThunk.withTypes = ()=>asyncThunk;
    return {
        reducer (caseReducer) {
            return Object.assign({
                // hack so the wrapping function has the same name as the original
                // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
                [caseReducer.name] (...args) {
                    return caseReducer(...args);
                }
            }[caseReducer.name], {
                _reducerDefinitionType: "reducer" /* reducer */ 
            });
        },
        preparedReducer (prepare, reducer) {
            return {
                _reducerDefinitionType: "reducerWithPrepare" /* reducerWithPrepare */ ,
                prepare,
                reducer
            };
        },
        asyncThunk
    };
}
function handleNormalReducerDefinition({ type, reducerName, createNotation }, maybeReducerWithPrepare, context) {
    let caseReducer;
    let prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
        if (createNotation && !isCaseReducerWithPrepareDefinition(maybeReducerWithPrepare)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
        }
        caseReducer = maybeReducerWithPrepare.reducer;
        prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
        caseReducer = maybeReducerWithPrepare;
    }
    context.addCase(type, caseReducer).exposeCaseReducer(reducerName, caseReducer).exposeAction(reducerName, prepareCallback ? createAction(type, prepareCallback) : createAction(type));
}
function isAsyncThunkSliceReducerDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "asyncThunk" /* asyncThunk */ ;
}
function isCaseReducerWithPrepareDefinition(reducerDefinition) {
    return reducerDefinition._reducerDefinitionType === "reducerWithPrepare" /* reducerWithPrepare */ ;
}
function handleThunkCaseReducerDefinition({ type, reducerName }, reducerDefinition, context, cAT) {
    if (!cAT) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
    }
    const { payloadCreator, fulfilled, pending, rejected, settled, options } = reducerDefinition;
    const thunk = cAT(type, payloadCreator, options);
    context.exposeAction(reducerName, thunk);
    if (fulfilled) {
        context.addCase(thunk.fulfilled, fulfilled);
    }
    if (pending) {
        context.addCase(thunk.pending, pending);
    }
    if (rejected) {
        context.addCase(thunk.rejected, rejected);
    }
    if (settled) {
        context.addMatcher(thunk.settled, settled);
    }
    context.exposeCaseReducer(reducerName, {
        fulfilled: fulfilled || noop,
        pending: pending || noop,
        rejected: rejected || noop,
        settled: settled || noop
    });
}
function noop() {}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory(stateAdapter) {
    function getInitialState(additionalState = {}, entities) {
        const state = Object.assign(getInitialEntityState(), additionalState);
        return entities ? stateAdapter.setAll(state, entities) : state;
    }
    return {
        getInitialState
    };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState, options = {}) {
        const { createSelector: createSelector2 = createDraftSafeSelector } = options;
        const selectIds = (state)=>state.ids;
        const selectEntities = (state)=>state.entities;
        const selectAll = createSelector2(selectIds, selectEntities, (ids, entities)=>ids.map((id)=>entities[id]));
        const selectId = (_, id)=>id;
        const selectById = (entities, id)=>entities[id];
        const selectTotal = createSelector2(selectIds, (ids)=>ids.length);
        if (!selectState) {
            return {
                selectIds,
                selectEntities,
                selectAll,
                selectTotal,
                selectById: createSelector2(selectEntities, selectId, selectById)
            };
        }
        const selectGlobalizedEntities = createSelector2(selectState, selectEntities);
        return {
            selectIds: createSelector2(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createSelector2(selectState, selectAll),
            selectTotal: createSelector2(selectState, selectTotal),
            selectById: createSelector2(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return {
        getSelectors
    };
}
// src/entities/state_adapter.ts
var isDraftTyped = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraft"];
function createSingleArgumentStateOperator(mutator) {
    const operator = createStateOperator((_, state)=>mutator(state));
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        const runMutator = (draft)=>{
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            } else {
                mutator(arg, draft);
            }
        };
        if (isDraftTyped(state)) {
            runMutator(state);
            return state;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produce"])(state, runMutator);
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    const key = selectId(entity);
    if (("TURBOPACK compile-time value", "development") !== "production" && key === void 0) {
        console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function getCurrent(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDraft"])(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$immer$2f$dist$2f$immer$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["current"])(value) : value;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    const existingIdsArray = getCurrent(state.ids);
    const existingIds = new Set(existingIdsArray);
    const added = [];
    const addedIds = /* @__PURE__ */ new Set([]);
    const updated = [];
    for (const entity of newEntities){
        const id = selectIdValue(entity, selectId);
        if (existingIds.has(id) || addedIds.has(id)) {
            updated.push({
                id,
                changes: entity
            });
        } else {
            addedIds.add(id);
            added.push(entity);
        }
    }
    return [
        added,
        updated,
        existingIdsArray
    ];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (const entity of newEntities){
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        const key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        ;
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (const entity of newEntities){
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([
            key
        ], state);
    }
    function removeManyMutably(keys, state) {
        let didMutate = false;
        keys.forEach((key)=>{
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter((id)=>id in state.entities);
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        const original3 = state.entities[update.id];
        if (original3 === void 0) {
            return false;
        }
        const updated = Object.assign({}, original3, update.changes);
        const newKey = selectIdValue(updated, selectId);
        const hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        ;
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([
            update
        ], state);
    }
    function updateManyMutably(updates, state) {
        const newKeys = {};
        const updatesPerEntity = {};
        updates.forEach((update)=>{
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    // Spreads ignore falsy values, so this works even if there isn't
                    // an existing update already at this key
                    changes: {
                        ...updatesPerEntity[update.id]?.changes,
                        ...update.changes
                    }
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        const didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            const didMutateIds = updates.filter((update)=>takeNewKey(newKeys, update, state)).length > 0;
            if (didMutateIds) {
                state.ids = Object.values(state.entities).map((e)=>selectIdValue(e, selectId));
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([
            entity
        ], state);
    }
    function upsertManyMutably(newEntities, state) {
        const [added, updated] = splitAddedUpdatedEntities(newEntities, selectId, state);
        addManyMutably(added, state);
        updateManyMutably(updated, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function findInsertIndex(sortedItems, item, comparisonFunction) {
    let lowIndex = 0;
    let highIndex = sortedItems.length;
    while(lowIndex < highIndex){
        let middleIndex = lowIndex + highIndex >>> 1;
        const currentItem = sortedItems[middleIndex];
        const res = comparisonFunction(item, currentItem);
        if (res >= 0) {
            lowIndex = middleIndex + 1;
        } else {
            highIndex = middleIndex;
        }
    }
    return lowIndex;
}
function insert(sortedItems, item, comparisonFunction) {
    const insertAtIndex = findInsertIndex(sortedItems, item, comparisonFunction);
    sortedItems.splice(insertAtIndex, 0, item);
    return sortedItems;
}
function createSortedStateAdapter(selectId, comparer) {
    const { removeOne, removeMany, removeAll } = createUnsortedStateAdapter(selectId);
    function addOneMutably(entity, state) {
        return addManyMutably([
            entity
        ], state);
    }
    function addManyMutably(newEntities, state, existingIds) {
        newEntities = ensureEntitiesArray(newEntities);
        const existingKeys = new Set(existingIds ?? getCurrent(state.ids));
        const addedKeys = /* @__PURE__ */ new Set();
        const models = newEntities.filter((model)=>{
            const modelId = selectIdValue(model, selectId);
            const notAdded = !addedKeys.has(modelId);
            if (notAdded) addedKeys.add(modelId);
            return !existingKeys.has(modelId) && notAdded;
        });
        if (models.length !== 0) {
            mergeFunction(state, models);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([
            entity
        ], state);
    }
    function setManyMutably(newEntities, state) {
        let deduplicatedEntities = {};
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            for (const item of newEntities){
                const entityId = selectId(item);
                deduplicatedEntities[entityId] = item;
                delete state.entities[entityId];
            }
            newEntities = ensureEntitiesArray(deduplicatedEntities);
            mergeFunction(state, newEntities);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state, []);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([
            update
        ], state);
    }
    function updateManyMutably(updates, state) {
        let appliedUpdates = false;
        let replacedIds = false;
        for (let update of updates){
            const entity = state.entities[update.id];
            if (!entity) {
                continue;
            }
            appliedUpdates = true;
            Object.assign(entity, update.changes);
            const newId = selectId(entity);
            if (update.id !== newId) {
                replacedIds = true;
                delete state.entities[update.id];
                const oldIndex = state.ids.indexOf(update.id);
                state.ids[oldIndex] = newId;
                state.entities[newId] = entity;
            }
        }
        if (appliedUpdates) {
            mergeFunction(state, [], appliedUpdates, replacedIds);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([
            entity
        ], state);
    }
    function upsertManyMutably(newEntities, state) {
        const [added, updated, existingIdsArray] = splitAddedUpdatedEntities(newEntities, selectId, state);
        if (added.length) {
            addManyMutably(added, state, existingIdsArray);
        }
        if (updated.length) {
            updateManyMutably(updated, state);
        }
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for(let i = 0; i < a.length; i++){
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    const mergeFunction = (state, addedItems, appliedUpdates, replacedIds)=>{
        const currentEntities = getCurrent(state.entities);
        const currentIds = getCurrent(state.ids);
        const stateEntities = state.entities;
        let ids = currentIds;
        if (replacedIds) {
            ids = new Set(currentIds);
        }
        let sortedEntities = [];
        for (const id of ids){
            const entity = currentEntities[id];
            if (entity) {
                sortedEntities.push(entity);
            }
        }
        const wasPreviouslyEmpty = sortedEntities.length === 0;
        for (const item of addedItems){
            stateEntities[selectId(item)] = item;
            if (!wasPreviouslyEmpty) {
                insert(sortedEntities, item, comparer);
            }
        }
        if (wasPreviouslyEmpty) {
            sortedEntities = addedItems.slice().sort(comparer);
        } else if (appliedUpdates) {
            sortedEntities.sort(comparer);
        }
        const newSortedIds = sortedEntities.map(selectId);
        if (!areArraysEqual(currentIds, newSortedIds)) {
            state.ids = newSortedIds;
        }
    };
    return {
        removeOne,
        removeMany,
        removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options = {}) {
    const { selectId, sortComparer } = {
        sortComparer: false,
        selectId: (instance)=>instance.id,
        ...options
    };
    const stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    const stateFactory = createInitialStateFactory(stateAdapter);
    const selectorsFactory = createSelectorsFactory();
    return {
        selectId,
        sortComparer,
        ...stateFactory,
        ...selectorsFactory,
        ...stateAdapter
    };
}
// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = `task-${cancelled}`;
var taskCompleted = `task-${completed}`;
var listenerCancelled = `${listener}-${cancelled}`;
var listenerCompleted = `${listener}-${completed}`;
var TaskAbortError = class {
    constructor(code){
        this.code = code;
        this.message = `${task} ${cancelled} (reason: ${code})`;
    }
    name = "TaskAbortError";
    message;
};
// src/listenerMiddleware/utils.ts
var assertFunction = (func, expected)=>{
    if (typeof func !== "function") {
        throw new TypeError(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `${expected} is not a function`);
    }
};
var noop2 = ()=>{};
var catchRejection = (promise, onError = noop2)=>{
    promise.catch(onError);
    return promise;
};
var addAbortSignalListener = (abortSignal, callback)=>{
    abortSignal.addEventListener("abort", callback, {
        once: true
    });
    return ()=>abortSignal.removeEventListener("abort", callback);
};
var abortControllerWithReason = (abortController, reason)=>{
    const signal = abortController.signal;
    if (signal.aborted) {
        return;
    }
    if (!("reason" in signal)) {
        Object.defineProperty(signal, "reason", {
            enumerable: true,
            value: reason,
            configurable: true,
            writable: true
        });
    }
    ;
    abortController.abort(reason);
};
// src/listenerMiddleware/task.ts
var validateActive = (signal)=>{
    if (signal.aborted) {
        const { reason } = signal;
        throw new TaskAbortError(reason);
    }
};
function raceWithSignal(signal, promise) {
    let cleanup = noop2;
    return new Promise((resolve, reject)=>{
        const notifyRejection = ()=>reject(new TaskAbortError(signal.reason));
        if (signal.aborted) {
            notifyRejection();
            return;
        }
        cleanup = addAbortSignalListener(signal, notifyRejection);
        promise.finally(()=>cleanup()).then(resolve, reject);
    }).finally(()=>{
        cleanup = noop2;
    });
}
var runTask = async (task2, cleanUp)=>{
    try {
        await Promise.resolve();
        const value = await task2();
        return {
            status: "ok",
            value
        };
    } catch (error) {
        return {
            status: error instanceof TaskAbortError ? "cancelled" : "rejected",
            error
        };
    } finally{
        cleanUp?.();
    }
};
var createPause = (signal)=>{
    return (promise)=>{
        return catchRejection(raceWithSignal(signal, promise).then((output)=>{
            validateActive(signal);
            return output;
        }));
    };
};
var createDelay = (signal)=>{
    const pause = createPause(signal);
    return (timeoutMs)=>{
        return pause(new Promise((resolve)=>setTimeout(resolve, timeoutMs)));
    };
};
// src/listenerMiddleware/index.ts
var { assign } = Object;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = (parentAbortSignal, parentBlockingPromises)=>{
    const linkControllers = (controller)=>addAbortSignalListener(parentAbortSignal, ()=>abortControllerWithReason(controller, parentAbortSignal.reason));
    return (taskExecutor, opts)=>{
        assertFunction(taskExecutor, "taskExecutor");
        const childAbortController = new AbortController();
        linkControllers(childAbortController);
        const result = runTask(async ()=>{
            validateActive(parentAbortSignal);
            validateActive(childAbortController.signal);
            const result2 = await taskExecutor({
                pause: createPause(childAbortController.signal),
                delay: createDelay(childAbortController.signal),
                signal: childAbortController.signal
            });
            validateActive(childAbortController.signal);
            return result2;
        }, ()=>abortControllerWithReason(childAbortController, taskCompleted));
        if (opts?.autoJoin) {
            parentBlockingPromises.push(result.catch(noop2));
        }
        return {
            result: createPause(parentAbortSignal)(result),
            cancel () {
                abortControllerWithReason(childAbortController, taskCancelled);
            }
        };
    };
};
var createTakePattern = (startListening, signal)=>{
    const take = async (predicate, timeout)=>{
        validateActive(signal);
        let unsubscribe = ()=>{};
        const tuplePromise = new Promise((resolve, reject)=>{
            let stopListening = startListening({
                predicate,
                effect: (action, listenerApi)=>{
                    listenerApi.unsubscribe();
                    resolve([
                        action,
                        listenerApi.getState(),
                        listenerApi.getOriginalState()
                    ]);
                }
            });
            unsubscribe = ()=>{
                stopListening();
                reject();
            };
        });
        const promises = [
            tuplePromise
        ];
        if (timeout != null) {
            promises.push(new Promise((resolve)=>setTimeout(resolve, timeout, null)));
        }
        try {
            const output = await raceWithSignal(signal, Promise.race(promises));
            validateActive(signal);
            return output;
        } finally{
            unsubscribe();
        }
    };
    return (predicate, timeout)=>catchRejection(take(predicate, timeout));
};
var getListenerEntryPropsFrom = (options)=>{
    let { type, actionCreator, matcher, predicate, effect } = options;
    if (type) {
        predicate = createAction(type).match;
    } else if (actionCreator) {
        type = actionCreator.type;
        predicate = actionCreator.match;
    } else if (matcher) {
        predicate = matcher;
    } else if (predicate) {} else {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Creating or removing a listener requires one of the known fields for matching an action");
    }
    assertFunction(effect, "options.listener");
    return {
        predicate,
        type,
        effect
    };
};
var createListenerEntry = /* @__PURE__ */ assign((options)=>{
    const { type, predicate, effect } = getListenerEntryPropsFrom(options);
    const entry = {
        id: nanoid(),
        effect,
        type,
        predicate,
        pending: /* @__PURE__ */ new Set(),
        unsubscribe: ()=>{
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Unsubscribe not initialized");
        }
    };
    return entry;
}, {
    withTypes: ()=>createListenerEntry
});
var findListenerEntry = (listenerMap, options)=>{
    const { type, effect, predicate } = getListenerEntryPropsFrom(options);
    return Array.from(listenerMap.values()).find((entry)=>{
        const matchPredicateOrType = typeof type === "string" ? entry.type === type : entry.predicate === predicate;
        return matchPredicateOrType && entry.effect === effect;
    });
};
var cancelActiveListeners = (entry)=>{
    entry.pending.forEach((controller)=>{
        abortControllerWithReason(controller, listenerCancelled);
    });
};
var createClearListenerMiddleware = (listenerMap, executingListeners)=>{
    return ()=>{
        for (const listener2 of executingListeners.keys()){
            cancelActiveListeners(listener2);
        }
        listenerMap.clear();
    };
};
var safelyNotifyError = (errorHandler, errorToNotify, errorInfo)=>{
    try {
        errorHandler(errorToNotify, errorInfo);
    } catch (errorHandlerError) {
        setTimeout(()=>{
            throw errorHandlerError;
        }, 0);
    }
};
var addListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/add`), {
    withTypes: ()=>addListener
});
var clearAllListeners = /* @__PURE__ */ createAction(`${alm}/removeAll`);
var removeListener = /* @__PURE__ */ assign(/* @__PURE__ */ createAction(`${alm}/remove`), {
    withTypes: ()=>removeListener
});
var defaultErrorHandler = (...args)=>{
    console.error(`${alm}/error`, ...args);
};
var createListenerMiddleware = (middlewareOptions = {})=>{
    const listenerMap = /* @__PURE__ */ new Map();
    const executingListeners = /* @__PURE__ */ new Map();
    const trackExecutingListener = (entry)=>{
        const count = executingListeners.get(entry) ?? 0;
        executingListeners.set(entry, count + 1);
    };
    const untrackExecutingListener = (entry)=>{
        const count = executingListeners.get(entry) ?? 1;
        if (count === 1) {
            executingListeners.delete(entry);
        } else {
            executingListeners.set(entry, count - 1);
        }
    };
    const { extra, onError = defaultErrorHandler } = middlewareOptions;
    assertFunction(onError, "onError");
    const insertEntry = (entry)=>{
        entry.unsubscribe = ()=>listenerMap.delete(entry.id);
        listenerMap.set(entry.id, entry);
        return (cancelOptions)=>{
            entry.unsubscribe();
            if (cancelOptions?.cancelActive) {
                cancelActiveListeners(entry);
            }
        };
    };
    const startListening = (options)=>{
        const entry = findListenerEntry(listenerMap, options) ?? createListenerEntry(options);
        return insertEntry(entry);
    };
    assign(startListening, {
        withTypes: ()=>startListening
    });
    const stopListening = (options)=>{
        const entry = findListenerEntry(listenerMap, options);
        if (entry) {
            entry.unsubscribe();
            if (options.cancelActive) {
                cancelActiveListeners(entry);
            }
        }
        return !!entry;
    };
    assign(stopListening, {
        withTypes: ()=>stopListening
    });
    const notifyListener = async (entry, action, api, getOriginalState)=>{
        const internalTaskController = new AbortController();
        const take = createTakePattern(startListening, internalTaskController.signal);
        const autoJoinPromises = [];
        try {
            entry.pending.add(internalTaskController);
            trackExecutingListener(entry);
            await Promise.resolve(entry.effect(action, // Use assign() rather than ... to avoid extra helper functions added to bundle
            assign({}, api, {
                getOriginalState,
                condition: (predicate, timeout)=>take(predicate, timeout).then(Boolean),
                take,
                delay: createDelay(internalTaskController.signal),
                pause: createPause(internalTaskController.signal),
                extra,
                signal: internalTaskController.signal,
                fork: createFork(internalTaskController.signal, autoJoinPromises),
                unsubscribe: entry.unsubscribe,
                subscribe: ()=>{
                    listenerMap.set(entry.id, entry);
                },
                cancelActiveListeners: ()=>{
                    entry.pending.forEach((controller, _, set)=>{
                        if (controller !== internalTaskController) {
                            abortControllerWithReason(controller, listenerCancelled);
                            set.delete(controller);
                        }
                    });
                },
                cancel: ()=>{
                    abortControllerWithReason(internalTaskController, listenerCancelled);
                    entry.pending.delete(internalTaskController);
                },
                throwIfCancelled: ()=>{
                    validateActive(internalTaskController.signal);
                }
            })));
        } catch (listenerError) {
            if (!(listenerError instanceof TaskAbortError)) {
                safelyNotifyError(onError, listenerError, {
                    raisedBy: "effect"
                });
            }
        } finally{
            await Promise.all(autoJoinPromises);
            abortControllerWithReason(internalTaskController, listenerCompleted);
            untrackExecutingListener(entry);
            entry.pending.delete(internalTaskController);
        }
    };
    const clearListenerMiddleware = createClearListenerMiddleware(listenerMap, executingListeners);
    const middleware = (api)=>(next)=>(action)=>{
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAction"])(action)) {
                    return next(action);
                }
                if (addListener.match(action)) {
                    return startListening(action.payload);
                }
                if (clearAllListeners.match(action)) {
                    clearListenerMiddleware();
                    return;
                }
                if (removeListener.match(action)) {
                    return stopListening(action.payload);
                }
                let originalState = api.getState();
                const getOriginalState = ()=>{
                    if (originalState === INTERNAL_NIL_TOKEN) {
                        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `${alm}: getOriginalState can only be called synchronously`);
                    }
                    return originalState;
                };
                let result;
                try {
                    result = next(action);
                    if (listenerMap.size > 0) {
                        const currentState = api.getState();
                        const listenerEntries = Array.from(listenerMap.values());
                        for (const entry of listenerEntries){
                            let runListener = false;
                            try {
                                runListener = entry.predicate(action, currentState, originalState);
                            } catch (predicateError) {
                                runListener = false;
                                safelyNotifyError(onError, predicateError, {
                                    raisedBy: "predicate"
                                });
                            }
                            if (!runListener) {
                                continue;
                            }
                            notifyListener(entry, action, api, getOriginalState);
                        }
                    }
                } finally{
                    originalState = INTERNAL_NIL_TOKEN;
                }
                return result;
            };
    return {
        middleware,
        startListening,
        stopListening,
        clearListeners: clearListenerMiddleware
    };
};
// src/dynamicMiddleware/index.ts
var createMiddlewareEntry = (middleware)=>({
        middleware,
        applied: /* @__PURE__ */ new Map()
    });
var matchInstance = (instanceId)=>(action)=>action?.meta?.instanceId === instanceId;
var createDynamicMiddleware = ()=>{
    const instanceId = nanoid();
    const middlewareMap = /* @__PURE__ */ new Map();
    const withMiddleware = Object.assign(createAction("dynamicMiddleware/add", (...middlewares)=>({
            payload: middlewares,
            meta: {
                instanceId
            }
        })), {
        withTypes: ()=>withMiddleware
    });
    const addMiddleware = Object.assign(function addMiddleware2(...middlewares) {
        middlewares.forEach((middleware2)=>{
            getOrInsertComputed(middlewareMap, middleware2, createMiddlewareEntry);
        });
    }, {
        withTypes: ()=>addMiddleware
    });
    const getFinalMiddleware = (api)=>{
        const appliedMiddleware = Array.from(middlewareMap.values()).map((entry)=>getOrInsertComputed(entry.applied, api, entry.middleware));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compose"])(...appliedMiddleware);
    };
    const isWithMiddleware = isAllOf(withMiddleware, matchInstance(instanceId));
    const middleware = (api)=>(next)=>(action)=>{
                if (isWithMiddleware(action)) {
                    addMiddleware(...action.payload);
                    return api.dispatch;
                }
                return getFinalMiddleware(api)(next)(action);
            };
    return {
        middleware,
        addMiddleware,
        withMiddleware,
        instanceId
    };
};
;
var isSliceLike = (maybeSliceLike)=>"reducerPath" in maybeSliceLike && typeof maybeSliceLike.reducerPath === "string";
var getReducers = (slices)=>slices.flatMap((sliceOrMap)=>isSliceLike(sliceOrMap) ? [
            [
                sliceOrMap.reducerPath,
                sliceOrMap.reducer
            ]
        ] : Object.entries(sliceOrMap));
var ORIGINAL_STATE = Symbol.for("rtk-state-proxy-original");
var isStateProxy = (value)=>!!value && !!value[ORIGINAL_STATE];
var stateProxyMap = /* @__PURE__ */ new WeakMap();
var createStateProxy = (state, reducerMap, initialStateCache)=>getOrInsertComputed(stateProxyMap, state, ()=>new Proxy(state, {
            get: (target, prop, receiver)=>{
                if (prop === ORIGINAL_STATE) return target;
                const result = Reflect.get(target, prop, receiver);
                if (typeof result === "undefined") {
                    const cached = initialStateCache[prop];
                    if (typeof cached !== "undefined") return cached;
                    const reducer = reducerMap[prop];
                    if (reducer) {
                        const reducerResult = reducer(void 0, {
                            type: nanoid()
                        });
                        if (typeof reducerResult === "undefined") {
                            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `The slice reducer for key "${prop.toString()}" returned undefined when called for selector(). If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
                        }
                        initialStateCache[prop] = reducerResult;
                        return reducerResult;
                    }
                }
                return result;
            }
        }));
var original = (state)=>{
    if (!isStateProxy(state)) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "original must be used on state Proxy");
    }
    return state[ORIGINAL_STATE];
};
var emptyObject = {};
var noopReducer = (state = emptyObject)=>state;
function combineSlices(...slices) {
    const reducerMap = Object.fromEntries(getReducers(slices));
    const getReducer = ()=>Object.keys(reducerMap).length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$redux$2f$dist$2f$redux$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineReducers"])(reducerMap) : noopReducer;
    let reducer = getReducer();
    function combinedReducer(state, action) {
        return reducer(state, action);
    }
    combinedReducer.withLazyLoadedSlices = ()=>combinedReducer;
    const initialStateCache = {};
    const inject = (slice, config = {})=>{
        const { reducerPath, reducer: reducerToInject } = slice;
        const currentReducer = reducerMap[reducerPath];
        if (!config.overrideExisting && currentReducer && currentReducer !== reducerToInject) {
            if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "development") {
                console.error(`called \`inject\` to override already-existing reducer ${reducerPath} without specifying \`overrideExisting: true\``);
            }
            return combinedReducer;
        }
        if (config.overrideExisting && currentReducer !== reducerToInject) {
            delete initialStateCache[reducerPath];
        }
        reducerMap[reducerPath] = reducerToInject;
        reducer = getReducer();
        return combinedReducer;
    };
    const selector = Object.assign(function makeSelector(selectorFn, selectState) {
        return function selector2(state, ...args) {
            return selectorFn(createStateProxy(selectState ? selectState(state, ...args) : state, reducerMap, initialStateCache), ...args);
        };
    }, {
        original
    });
    return Object.assign(combinedReducer, {
        inject,
        selector
    });
}
// src/formatProdErrorMessage.ts
function formatProdErrorMessage(code) {
    return `Minified Redux Toolkit error #${code}; visit https://redux-toolkit.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
;
 //# sourceMappingURL=redux-toolkit.modern.mjs.map
}),
"[project]/client/node_modules/react-redux/dist/rsc.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/shallowEqual.ts
__turbopack_context__.s([
    "Provider",
    ()=>throwNotSupportedError,
    "ReactReduxContext",
    ()=>ReactReduxContext,
    "batch",
    ()=>throwNotSupportedError,
    "connect",
    ()=>throwNotSupportedError,
    "createDispatchHook",
    ()=>throwNotSupportedError,
    "createSelectorHook",
    ()=>throwNotSupportedError,
    "createStoreHook",
    ()=>throwNotSupportedError,
    "shallowEqual",
    ()=>shallowEqual,
    "useDispatch",
    ()=>throwNotSupportedError,
    "useSelector",
    ()=>throwNotSupportedError,
    "useStore",
    ()=>throwNotSupportedError
]);
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for(let i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
// src/index-rsc.ts
var throwNotSupportedError = (...args)=>{
    throw new Error("This function is not supported in React Server Components. Please only use this export in a Client Component.");
};
var ReactReduxContext = {};
;
 //# sourceMappingURL=rsc.mjs.map
}),
"[project]/client/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
}),
"[project]/client/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFormatLongFn",
    ()=>buildFormatLongFn
]);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
}),
"[project]/client/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-rsc] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/client/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/client/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ __turbopack_context__.s([
    "buildLocalizeFn",
    ()=>buildLocalizeFn
]);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
}),
"[project]/client/node_modules/date-fns/locale/en-US/_lib/localize.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-rsc] (ecmascript)");
;
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/client/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchFn",
    ()=>buildMatchFn
]);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}
}),
"[project]/client/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchPatternFn",
    ()=>buildMatchPatternFn
]);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
}),
"[project]/client/node_modules/date-fns/locale/en-US/_lib/match.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-rsc] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/client/node_modules/date-fns/locale/en-US.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/en-US/_lib/localize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/en-US/_lib/match.js [app-rsc] (ecmascript)");
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/client/node_modules/date-fns/locale/en-US.js [app-rsc] (ecmascript) <export enUS as defaultLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["enUS"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/en-US.js [app-rsc] (ecmascript)");
}),
"[project]/client/node_modules/date-fns/_lib/defaultOptions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "setDefaultOptions",
    ()=>setDefaultOptions
]);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
}),
"[project]/client/node_modules/date-fns/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/client/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/client/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/client/node_modules/date-fns/_lib/normalizeDates.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeDates",
    ()=>normalizeDates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
;
function normalizeDates(context, ...dates) {
    const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}
}),
"[project]/client/node_modules/date-fns/startOfDay.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfDay",
    ()=>startOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
function startOfDay(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfDay;
}),
"[project]/client/node_modules/date-fns/differenceInCalendarDays.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarDays",
    ()=>differenceInCalendarDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/normalizeDates.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfDay.js [app-rsc] (ecmascript)");
;
;
;
;
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(laterDate_);
    const earlierStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfDay"])(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarDays;
}),
"[project]/client/node_modules/date-fns/startOfYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfYear",
    ()=>startOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
function startOfYear(date, options) {
    const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
const __TURBOPACK__default__export__ = startOfYear;
}),
"[project]/client/node_modules/date-fns/getDayOfYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDayOfYear",
    ()=>getDayOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/differenceInCalendarDays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
function getDayOfYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(_date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfYear"])(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
const __TURBOPACK__default__export__ = getDayOfYear;
}),
"[project]/client/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeek",
    ()=>startOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/defaultOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
function startOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeek;
}),
"[project]/client/node_modules/date-fns/startOfISOWeek.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeek",
    ()=>startOfISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)");
;
function startOfISOWeek(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        ...options,
        weekStartsOn: 1
    });
}
const __TURBOPACK__default__export__ = startOfISOWeek;
}),
"[project]/client/node_modules/date-fns/getISOWeekYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeekYear",
    ()=>getISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfISOWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
function getISOWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getISOWeekYear;
}),
"[project]/client/node_modules/date-fns/startOfISOWeekYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeekYear",
    ()=>startOfISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/getISOWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfISOWeek.js [app-rsc] (ecmascript)");
;
;
;
function startOfISOWeekYear(date, options) {
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date, options);
    const fourthOfJanuary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuary);
}
const __TURBOPACK__default__export__ = startOfISOWeekYear;
}),
"[project]/client/node_modules/date-fns/getISOWeek.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeek",
    ()=>getISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfISOWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfISOWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
;
function getISOWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfISOWeek"])(_date) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfISOWeekYear"])(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getISOWeek;
}),
"[project]/client/node_modules/date-fns/getWeekYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeekYear",
    ()=>getWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/defaultOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
;
function getWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) {
        return year + 1;
    } else if (+_date >= +startOfThisYear) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getWeekYear;
}),
"[project]/client/node_modules/date-fns/startOfWeekYear.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeekYear",
    ()=>startOfWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/defaultOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/constructFrom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/getWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)");
;
;
;
;
function startOfWeekYear(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
    const firstWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeek, options);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeekYear;
}),
"[project]/client/node_modules/date-fns/getWeek.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeek",
    ()=>getWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/startOfWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
;
function getWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeek"])(_date, options) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["startOfWeekYear"])(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getWeek;
}),
"[project]/client/node_modules/date-fns/_lib/addLeadingZeros.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLeadingZeros",
    ()=>addLeadingZeros
]);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}
}),
"[project]/client/node_modules/date-fns/_lib/format/lightFormatters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lightFormatters",
    ()=>lightFormatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/addLeadingZeros.js [app-rsc] (ecmascript)");
;
const lightFormatters = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(fractionalSeconds, token.length);
    }
};
}),
"[project]/client/node_modules/date-fns/_lib/format/formatters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/getDayOfYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/getISOWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/getISOWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/getWeek.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/getWeekYear.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/addLeadingZeros.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/format/lightFormatters.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") {
            return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date);
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWeek"])(date, options);
        if (token === "wo") {
            return localize.ordinalNumber(week, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
        if (token === "Io") {
            return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") {
            return localize.ordinalNumber(date.getDate(), {
                unit: "date"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDayOfYear"])(date);
        if (token === "Do") {
            return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") {
            return localize.ordinalNumber(date.getHours(), {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") {
            return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") {
            return localize.ordinalNumber(date.getSeconds(), {
                unit: "second"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lightFormatters"].S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return "Z";
        }
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    return sign + String(hours) + delimiter + (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absOffset / 60), 2);
    const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
}),
"[project]/client/node_modules/date-fns/_lib/format/longFormatters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "longFormatters",
    ()=>longFormatters
]);
const dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
    }
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
}),
"[project]/client/node_modules/date-fns/_lib/protectedTokens.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProtectedDayOfYearToken",
    ()=>isProtectedDayOfYearToken,
    "isProtectedWeekYearToken",
    ()=>isProtectedWeekYearToken,
    "warnOrThrowProtectedError",
    ()=>warnOrThrowProtectedError
]);
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
}),
"[project]/client/node_modules/date-fns/isDate.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isDate",
    ()=>isDate
]);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
const __TURBOPACK__default__export__ = isDate;
}),
"[project]/client/node_modules/date-fns/isValid.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isValid",
    ()=>isValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/isDate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
function isValid(date) {
    return !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDate"])(date) && typeof date !== "number" || isNaN(+(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date)));
}
const __TURBOPACK__default__export__ = isValid;
}),
"[project]/client/node_modules/date-fns/format.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "format",
    ()=>format,
    "formatDate",
    ()=>format
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/locale/en-US.js [app-rsc] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/defaultOptions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/format/formatters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/format/longFormatters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/_lib/protectedTokens.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/isValid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/toDate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
;
function format(date, formatStr, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValid"])(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["longFormatters"][firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return {
                isToken: false,
                value: "'"
            };
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return {
                isToken: false,
                value: cleanEscapedString(substring)
            };
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatters"][firstCharacter]) {
            return {
                isToken: true,
                value: substring
            };
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) {
        parts = locale.localize.preprocessor(originalDate, parts);
    }
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isProtectedWeekYearToken"])(token) || !options?.useAdditionalDayOfYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isProtectedDayOfYearToken"])(token)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["warnOrThrowProtectedError"])(token, formatStr, String(date));
        }
        const formatter = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatters"][token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}
const __TURBOPACK__default__export__ = format;
}),
];

//# sourceMappingURL=1e749_ec0ec466._.js.map