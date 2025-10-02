import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    minWidth: 600,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  concentration: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
