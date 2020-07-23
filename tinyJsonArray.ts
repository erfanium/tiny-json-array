const a = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "128.jpg",
  },
  "not object",
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "128.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "128.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "128.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "128.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "128.jpg",
  },
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "128.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "128.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "128.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "128.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "128.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "128.jpg",
  },
];

export function tiny(array: any[]): unknown[] {
  if (array.length === 0) return [];
  const pattern: (string | number)[] = [];
  const body: unknown[] = [];
  array.forEach((e, objectIndex) => {
    const eType = typeof e;
    if (eType !== "object") {
      body[objectIndex] = e;
      return;
    }

    body[objectIndex] = [];
    const row = body[objectIndex] as unknown[];
    for (const key in e) {
      let keyIndex = pattern.findIndex((v) => v === key);
      if (keyIndex === -1) {
        pattern.push(key);
        keyIndex = pattern.length - 1;
      }

      row[keyIndex] = e[key];
    }
  });

  return [pattern, ...body];
}

export function normalize(array: any[]): unknown[] {
  if (array.length === 0) return [];
  const [pattern, ...body] = array;
  const a: unknown[] = [];
  body.forEach((row, rowIndex) => {
    if (!Array.isArray(row)) {
      a[rowIndex] = row;
      return;
    }

    const o: Record<any, unknown> = (a[rowIndex] = {});
    (row as unknown[]).forEach((column, columnIndex) => {
      const key = pattern[columnIndex];
      const typeofKey = typeof key;
      if (typeofKey === 'string' || typeofKey === 'number' || typeofKey || 'symbol') {
        o[key] = column;
      }
      
    });
  });

  return a;
}

console.log(normalize(tiny(a)));
