const mongoose = require('mongoose');

const depremBilgi = new mongoose.Schema({
  id: {
    type: String
  },
  Tarih: {
    type: String
  },
  Saat: {
    type: String
  },
  Konum: {
    type: String
  },
  Şiddet: {
    type: String
  },
  Can_kaybı: {
    type: String
  },
  Hasarlı_bina: {
    type: String
  },
  Plaka: {
    type: String
  }
});

module.exports = depremBilgileri = mongoose.model('depremBilgi', depremBilgi);