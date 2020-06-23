const now = () => new Date().toISOString();

module.exports = function User({
  id,
  fullName,
  email,
  created_at = now(),
  updated_at = now(),
} = {}) {
  this.id = id;
  this.fullName = fullName;
  this.email = email;
  this.created_at = created_at;
  this.updated_at = updated_at;
};
