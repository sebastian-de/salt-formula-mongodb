{%- from "mongodb/map.jinja" import server with context -%}
db.createUser({
    user: "{{ server.admin.user }}",
    pwd: "{{ server.admin.password }}",
    roles: [
      {% for role in server.admin.roles %}
      "{{ role }}"{% if not loop.last %},{% endif %}
      {% endfor %}
    ]
  });
db.auth("{{ server.admin.user }}", "{{ server.admin.password }}");
