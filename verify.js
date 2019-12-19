const OS = process.platform;
const BIT = process.arch;
function error(text){
	console.error(`\x1b[1m\x1b[31mERROR! \x1b[0m\x1b[37m[ffmpeg-cli]\x1b[0m ${new Error(text)}`);
}
if (!(BIT === "x32" || BIT === "x64")) error("CPU architecture not supported");
const allOS = {
	linux: {
		x32: {
			url: "https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz",
			path: __dirname + "/ffmpeg/linuxx32/ffmpeg",
			probePath: __dirname + "/ffmpeg/linuxx32/ffprobe"
		},
		x64: {
			url: "https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-i686-static.tar.xz",
			path: __dirname + "/ffmpeg/linuxx64/ffmpeg",
			probePath: __dirname + "/ffmpeg/linuxx64/ffprobe"
		}
	},
	darwin: {
		x64: {
			url: "https://ffmpeg.zeranoe.com/builds/macos64/static/ffmpeg-latest-macos64-static.zip",
			path: __dirname + "/ffmpeg/darwinx64/bin/ffmpeg",
			probePath: __dirname + "/ffmpeg/darwinx64/bin/ffprobe"
		}
	},
	win32: {
		x32: {
			url: "https://ffmpeg.zeranoe.com/builds/win32/static/ffmpeg-latest-win32-static.zip",
			path: __dirname + "/ffmpeg/win32x32/bin/ffmpeg.exe",
			probePath: __dirname + "/ffmpeg/win32x32/bin/ffprobe.exe"
		},
		x64: {
			url: "https://ffmpeg.zeranoe.com/builds/win64/static/ffmpeg-latest-win64-static.zip",
			path: __dirname + "/ffmpeg/win32x64/bin/ffmpeg.exe",
			probePath: __dirname + "/ffmpeg/win32x64/bin/ffprobe.exe"
		}
	}
}
if (allOS[OS] === undefined) error("OS not supporteds!");
if (allOS[OS][BIT] === undefined) error("Invalid OS and CPU architecture!");
module.exports = allOS[OS][BIT];