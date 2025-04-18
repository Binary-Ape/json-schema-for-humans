# Schema Docs

- [1. ![Optional](https://img.shields.io/badge/Optional-yellow) Property `root > address`](#address)
  - [1.1. root > address > a number](#autogenerated_heading_2)
  - [1.2. root > address > address item 1](#autogenerated_heading_3)
  - [1.3. root > address > again a string](#autogenerated_heading_4)
  - [1.4. root > address > finally an enum](#autogenerated_heading_5)
- [2. ![Optional](https://img.shields.io/badge/Optional-yellow) Property `root > addressLines`](#addressLines)
  - [2.1. root > addressLines > addressLines item 0](#autogenerated_heading_6)
- [3. ![Optional](https://img.shields.io/badge/Optional-yellow) Property `root > arrayEmpty`](#arrayEmpty)

|                           |                                                                             |
| ------------------------- | --------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                    |
| **Additional properties** | ![Any type: allowed](https://img.shields.io/badge/Any%20type-allowed-green) |

**Description:** A little food fun

| Property                         | Pattern | Type  | Deprecated | Definition | Title/Description                                        |
| -------------------------------- | ------- | ----- | ---------- | ---------- | -------------------------------------------------------- |
| - [address](#address )           | No      | array | No         | -          | -                                                        |
| - [addressLines](#addressLines ) | No      | array | No         | -          | list of address lines                                    |
| - [arrayEmpty](#arrayEmpty )     | No      | array | No         | -          | This is not a valid JSON Schema, but let's do it anyway. |

## <a name="address"></a>1. ![Optional](https://img.shields.io/badge/Optional-yellow) Property `root > address`

|          |         |
| -------- | ------- |
| **Type** | `array` |

**Example:**

```json
[
    1600,
    "Pennsylvania",
    "Avenue",
    "NW",
    "Washington"
]
```

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | True               |
| **Tuple validation** | See below          |

| Each item of this array must be      | Description          |
| ------------------------------------ | -------------------- |
| [a number](#address_items_i0)        | -                    |
| [address item 1](#address_items_i1)  | followed by a string |
| [again a string](#address_items_i2)  | -                    |
| [finally an enum](#address_items_i3) | -                    |

### <a name="autogenerated_heading_2"></a>1.1. root > address > a number

**Title:** a number

|          |          |
| -------- | -------- |
| **Type** | `number` |

### <a name="autogenerated_heading_3"></a>1.2. root > address > address item 1

|          |          |
| -------- | -------- |
| **Type** | `string` |

**Description:** followed by a string

### <a name="autogenerated_heading_4"></a>1.3. root > address > again a string

**Title:** again a string

|          |                    |
| -------- | ------------------ |
| **Type** | `enum (of string)` |

Must be one of:
* "Street"
* "Avenue"
* "Boulevard"

### <a name="autogenerated_heading_5"></a>1.4. root > address > finally an enum

**Title:** finally an enum

|          |                    |
| -------- | ------------------ |
| **Type** | `enum (of string)` |

Must be one of:
* "NW"
* "NE"
* "SW"
* "SE"

## <a name="addressLines"></a>2. ![Optional](https://img.shields.io/badge/Optional-yellow) Property `root > addressLines`

|          |         |
| -------- | ------- |
| **Type** | `array` |

**Description:** list of address lines

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be               | Description |
| --------------------------------------------- | ----------- |
| [addressLines item 0](#addressLines_items_i0) | -           |

### <a name="autogenerated_heading_6"></a>2.1. root > addressLines > addressLines item 0

|          |          |
| -------- | -------- |
| **Type** | `string` |

## <a name="arrayEmpty"></a>3. ![Optional](https://img.shields.io/badge/Optional-yellow) Property `root > arrayEmpty`

|          |         |
| -------- | ------- |
| **Type** | `array` |

**Description:** This is not a valid JSON Schema, but let's do it anyway.

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | N/A                |

----------------------------------------------------------------------------------------------------------------------------
Generated using [json-schema-for-humans](https://github.com/coveooss/json-schema-for-humans)
