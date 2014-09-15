/**
 * Enumeration that holds the possible types for a component parameter.
 */
var parameterTypes = [
						/**
						 * Integer (non-real, whole) number.
						 */
						"int",
						/**
						 * Real number.
						 */
						"float",
						/**
						 * Single character string.
						 */
						"character",
						/**
						 * Multi-character string.
						 */
						"string",
						/**
						 * Boolean (true/false) value.
						 */
						"boolean",
						/**
						 * Reference for another gameEntity, or the number value
						 * of another game-entity ID
						 */
						"gameEntity",
						/**
						 * Array of elements
						 */
						"array",
						/**
						 * A "raw" object, like javascript objects, java
						 * instances of the Object class
						 */
						"object" ];

Object.freeze(parameterTypes);
exports.parameterTypes = parameterTypes;
