// Mengubah warna teks menjadi jingga (orange)

const chalk = require('chalk');

function orangeText(text) {
  return chalk.hex('#FFA500')(text);
}

// Mengekspor fungsi
module.exports = orangeText;

// Contoh penggunaan
if (require.main === module) {
  const text = process.argv[2] || 'Hello, World!';
  console.log(orangeText(text));
}
